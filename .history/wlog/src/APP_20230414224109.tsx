/*
 * @Descripttion: 
 * @version: 
 * @Author: Hao
 * @Date: 2023-04-14 22:34:23
 * @LastEditors: Hao
 * @LastEditTime: 2023-04-14 22:40:35
 * @FilePath: \wlog\wlog\src\APP.tsx
 */


// 创建react函数组件
im


const APP：React.FC = () => {
    return (
        <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
            </Layout>
        </ConnectedRouter>
        </Provider>
    );
    };
