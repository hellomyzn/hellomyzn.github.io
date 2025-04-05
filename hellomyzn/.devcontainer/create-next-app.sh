#!/bin/bash
set -e

OPTIONS=""

if [ "$CNA_USE_TYPESCRIPT" = "true" ]; then
  OPTIONS="$OPTIONS --typescript"
fi
if [ "$CNA_USE_ESLINT" = "true" ]; then
  OPTIONS="$OPTIONS --eslint"
fi
if [ "$CNA_USE_TAILWIND" = "true" ]; then
  OPTIONS="$OPTIONS --tailwind"
fi
if [ "$CNA_USE_SRC_DIR" = "true" ]; then
  OPTIONS="$OPTIONS --src-dir"
fi
if [ "$CNA_USE_APP_ROUTER" = "true" ]; then
  OPTIONS="$OPTIONS --app"
fi
if [ "$CNA_USE_TURBOPACK" = "true" ]; then
  OPTIONS="$OPTIONS --turbo"
fi
if [ "$CNA_CUSTOMIZE_ALIAS" = "true" ]; then
  OPTIONS="$OPTIONS --import-alias"
fi

# use-npmは確実につける
OPTIONS="$OPTIONS --use-npm --yes"

# 先にsrcディレクトリを完全削除
echo "Cleaning up ${WORKDIR}/src/..."
rm -rf ${WORKDIR}/src/{*,.[!.]*,..?*}

# 実行コマンド作成
CMD="create-next-app ${WORKDIR}/src/. ${OPTIONS}"

echo "Running: $CMD"
eval "$CMD"
