import { Config, configUmiAlias, createConfig } from "umi/test";

export default async () => {
  return (await configUmiAlias({
    ...createConfig({
      target: "browser",
      jsTransformer: "esbuild",
      jsTransformerOpts: { jsx: "automatic" },
    }),
    // 覆盖 umi 的默认 jest 配置, 如
    displayName: "Umi jest",
  })) as Config.InitialOptions;
};
