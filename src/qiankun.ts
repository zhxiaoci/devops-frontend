import {
    loadMicroApp,
    prefetchApps,
    start,
    addGlobalUncaughtErrorHandler
} from 'qiankun'

export const APP: any = {
// 数据看板
    DIFFVIEWER: {
        name: 'diff-viewer', // 应用名称（即子应用package.json的name值）
        entry: `http://localhost:3002/`, // 应用入口
        activeRule: '/:appId/detail/:id/kanban', // 应用激活规则
        container: '#subapp' // 应用挂载容器
    },
    // 雷电APM
    // APM: {
    //   name: 'apm',
    //   entry: `//apm${environment}.bigda.com/`,
    //   activeRule: '/:appId/detail/:id/apm',
    //   container: '#subapp'
    // }
}

const handleError = (e: any) => {
    console.log(e)
}

// 加载子应用
const loadSubApp = async (type: any, props: any) => {
    await unmountSubApp();
    (window as any).subApp = loadMicroApp(
      {
        ...APP[type],
        props: {
          baseInfo: APP[type],
          ...props
        }
      }
    )
    addGlobalUncaughtErrorHandler(handleError)
}

// 预请求子应用
export const prefetchSubApp = () => {
    start()
    prefetchApps(Object.values(APP))
}


export const unmountSubApp = async () => {
    const subApp = (window as any).subApp
    if (!subApp) {
      return
    }
  
    await subApp.loadPromise
    await subApp.bootstrapPromise
    await subApp.mountPromise
    let status = subApp.getStatus()
  
    if (status === 'NOT_MOUNTED') {
      return
    } else {
      await subApp.unmount()
    }
}

export default loadSubApp
