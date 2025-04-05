FROM ubuntu:22.04

# 最低限必要なパッケージだけ
RUN apt-get update && \
    apt-get install -y --no-install-recommends curl ca-certificates sudo gnupg && \
    rm -rf /var/lib/apt/lists/*

# Node.js 20インストール
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && \
    apt-get update && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# src/配下からpackage.jsonだけ拾う
COPY src/package*.json ./

RUN npm install --omit=dev

# src/配下をまるっとコピー
COPY src/. .

# Next.jsビルド
RUN npm run build

# ポート開放
EXPOSE 3000

# アプリ起動
CMD ["npm", "run", "start"]
