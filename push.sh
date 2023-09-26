#!/bin/bash

# 检查当前 Git 仓库是否有未提交的变更
if [[ -n $(git status -s) ]]; then
  # 提交变更并添加 commit message
  git add .
  git commit -m "update"

  # 检查提交是否成功
  if [[ $? -eq 0 ]]; then
    # 提交成功
    echo "提交成功"

    # 推送到远程仓库
    git push

    # 检查推送是否成功
    if [[ $? -eq 0 ]]; then
      # 推送成功
      echo "推送成功"
    else
      # 推送失败
      echo "推送失败"
    fi
  else
    # 提交失败
    echo "提交失败"
  fi
else
  # 没有未提交的变更
  echo "没有更新"
fi