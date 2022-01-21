### vue

vue项目的各种场景、问题尝试、实验、测试

本项目的版本为：vue2

项目创建方式：

```bash
vue create vuedemo
```

项目创建过程中选择了vue2版本，项目创建过程提供了vue2和vue3两个版本可供选择，由于测试目的选择了vue2版本

### jsconfig.json

``` js
// jsconfig.json
{
    "compilerOptions": {
        "target": "es6"
    },
    "exclude": [
        "node_modules",
        "dist"
    ]
}
```

jsconfig.json的简单配置，要有，vscode会检测