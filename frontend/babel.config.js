module.exports = function (api) {
  const validEnv = ['development', 'test', 'production'];
  const currentEnv = api.env();
  const isDevelopmentEnv = api.env('development');
  const isProductionEnv = api.env('production');
  const isTestEnv = api.env('test');

  if (!validEnv.includes(currentEnv)) {
    throw new Error(
      `Please specify a valid NODE_ENV or BABEL_ENV environment variables. Valid values are "development", "test", and "production". Instead, received: ${ JSON.stringify(currentEnv) }.`
    );
  }

  return {
    presets: [
      ['@babel/preset-react', { runtime: 'automatic' }],
      [
        '@babel/preset-env',
        {
          targets: isTestEnv ? { node: 'current' } : undefined,
          forceAllTransforms: isProductionEnv || isDevelopmentEnv,
          useBuiltIns: 'entry',
          corejs: 3,
          modules: false,
          exclude: ['transform-typeof-symbol'],
        },
      ],
    ].filter(Boolean),
    plugins: [
      // 'babel-plugin-macros',
      '@babel/plugin-syntax-dynamic-import',
      isTestEnv && 'babel-plugin-dynamic-import-node',
      '@babel/plugin-transform-destructuring',
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ['@babel/plugin-transform-runtime', { corejs: 3 }],
    ].filter(Boolean),
  };
};


// postgresql://sales_management_production_user:6UnApgnwTZUv1bSg418kqjHwtQREbiL5@dpg-ct0igs9u0jms73c5onng-a/sales_management_production_7i1o
// postgresql://sales_management_production_user:6UnApgnwTZUv1bSg418kqjHwtQREbiL5@dpg-ct0igs9u0jms73c5onng-a.oregon-postgres.render.com/sales_management_production_7i1o