# React18项目实战
1. [create react app 配置问题](#example)
2. [每个项目对应的hook](#example2)
3. [发现的问题](#third-example)
4. [页面步骤](#fourth-examplehttpwwwfourthexamplecom)

## create react app 配置问题

<details>
  <summary>样式污染</summary>

  * css in module
  * sytled-components
</details>
<details>
  <summary>绝对路径</summary>

  ```js
  // 1. yarn eject
  // 2. config/webpack.config.js
  alias: {
      ...
      'src':path.resolve('src') // '新的路径抬头'：path.resolve('src')
    },
  // 3. 配置jsconfig.json(解决vscode绝对路径无法引用的问题)
    {
      "compilerOptions": {
        "baseUrl": "./",
        "paths": {
          "src/*": ["src/*"]
        }
      }
    }
  ```
</details>

## 每个项目对应的知识点
<details>
<summary>useState</summary>

* 注意useState设置的state不能在原来的数据里面更改(参照项目2)
* useState中setState可接收一个参数表示prev的数据(参照项目3)
* 注意setState设置时数据是动态的(项目5和项目6对比)
* 如果不封装子组件要注意useState设置值的范围（参照项目9 alert的影响范围）

</details>

<details>
<summary>useEffect</summary>
 
* useEffect的依赖项不能是引用数据类型，不然无法比较，参见项目10
</details>

<details>
<summary>useRef</summary>

* 获取元素的大小和位置
```js
  // 可以参照原项目12，我没有用useRef和useContext的方式来做悬浮窗
  const tempBtn = e.target.getBoundingClientRect();
  const center = (tempBtn.left + tempBtn.right) / 2;
  const bottom = tempBtn.bottom - 3;
```
</details>

<details>
<summary>useReducer</summary>

* useReducer可以代替操作比较多的组件，可以完美代替useState
* useReducer可以让界面变得更加干净，实现数据操作、界面数据调用的完美分离，参照项目13 
</details>

## 发现的问题
1. 动画要加强，参照项目7


## 页面步骤
以项目19为例
1. 确认当前页面有哪些状态，initing,loading,next,
2. 确认当前页面有哪些操作：表单提交、点击下一个,检查是否正确，重新操作
3. 数据、结构、操作（统一放在context里管理）的分离

---
[原项目地址](https://www.youtube.com/watch?v=iZhV0bILFb0)