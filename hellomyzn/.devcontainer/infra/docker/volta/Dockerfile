FROM ubuntu:22.04

ARG PKG="curl ca-certificates sudo git vim locales"
ARG USER_NAME
ARG GROUP_NAME
ARG UID
ARG GID
ARG WORKDIR
ARG VOLTA_HOME
ARG TZ

ENV TZ=${TZ}
ENV HOME=/home/${USER_NAME}
ENV VOLTA_HOME=${HOME}/.volta
ENV PATH=${VOLTA_HOME}/bin:$PATH

# パッケージインストール
RUN apt-get update && \
    apt-get install -y --no-install-recommends ${PKG} && \
    rm -rf /var/lib/apt/lists/*

# ユーザー作成
RUN groupadd -g ${GID} ${GROUP_NAME} && \
    useradd -lm -s /bin/bash -u ${UID} -g ${GID} -G sudo ${USER_NAME} && \
    echo "${USER_NAME}:password" | chpasswd && \
    echo "${USER_NAME} ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# 一般ユーザーに切り替え
USER ${USER_NAME}

# Voltaインストール（myznユーザーで実行！）
RUN curl https://get.volta.sh | bash && \
    volta install node@latest npm@latest && \
    npm install -g create-next-app

# 作業ディレクトリ
RUN mkdir -p ${WORKDIR}
WORKDIR ${WORKDIR}
