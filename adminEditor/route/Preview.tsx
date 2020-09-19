import React from 'react';
import {observer, inject} from 'mobx-react';
import {IMainStore} from '../store';
import {Button, AsideNav, Layout, confirm} from 'amis';
import {RouteComponentProps, matchPath, Switch, Route} from 'react-router';
import {Link} from 'react-router-dom';
import NotFound from './NotFound';
import AMISRenderer from '../component/AMISRenderer';
import AddPageModal from '../component/AddPageModal';
import EditPageModal from '../component/EditPageModal';

function isActive(link: any, location: any) {
 
    const ret = matchPath(location.pathname, {
        path: link ? link.replace(/\?.*$/, '') : '',
        exact: true,
        strict: true
    });

    return !!ret;
}

function getPageMassge(store: any,id:any) {

}
const user_type = localStorage.getItem('user_type');

export default inject('store')(
    observer(function({store, location, history}: {store: IMainStore} & RouteComponentProps) {
        function renderHeader() {
            return (
                <div>
                    <div className={`a-Layout-brandBar`}>
                        <button onClick={store.toggleOffScreen} className="pull-right visible-xs">
                            <i className="glyphicon glyphicon-align-justify"></i>
                        </button>
                        <div className={`a-Layout-brand`}>
                            <i className="fa fa-paw"></i>
                            <span className="hidden-folded m-l-sm">Admin </span>
                        </div>
                    </div>
                    <div className={`a-Layout-headerBar`}>
                        <div className="nav navbar-nav hidden-xs">
                            <Button
                                level="link"
                                className="no-shadow navbar-btn"
                                onClick={store.toggleAsideFolded}
                                tooltip="展开或收起侧边栏"
                                placement="bottom"
                                iconOnly
                            >
                                <i className={store.asideFolded ? 'fa fa-indent' : 'fa fa-dedent'} />
                            </Button>
                        </div>
                        
                        {user_type=="designer" ? (
                             <div className="hidden-xs p-t-sm pull-right">
                             <Button size="sm" className="m-r-xs" level="success"  disabledTip="Todo...">
                                 应用配置
                             </Button>
                             <Button size="sm" className="m-r-xs" level="error"  disabledTip="Todo...">
                                 页面管理
                             </Button>
                             <Button size="sm" level="info" onClick={() => store.setAddPageIsOpen(true)}>
                                 快速新增页面
                             </Button> 
                             </div>
                        ) : null}
                       
                    </div>
                </div>
            );
        }

        function renderAside() {
           
            const navigations = store.pages.map(item => ({
                label: item.label,
                path: `/${item.path}`,
                icon: item.icon
            }));
            const paths = navigations.map(item => item.path);
            
            return (
                <AsideNav
                    key={store.asideFolded ? 'folded-aside' : 'aside'}
                    navigations={[
                        {
                            label: '菜单',
                            children: navigations
                        }
                    ]}
                    renderLink={({link, toggleExpand, classnames: cx, depth}: any) => {
                        if (link.hidden) {
                            return null;
                        }

                        let children = [];

                        if (link.children) {
                            children.push(
                                <span
                                    key="expand-toggle"
                                    className={cx('AsideNav-itemArrow')}
                                    onClick={e => toggleExpand(link, e)}
                                ></span>
                            );
                        }

                        link.badge &&
                            children.push(
                                <b key="badge" className={cx(`AsideNav-itemBadge`, link.badgeClassName || 'bg-info')}>
                                    {link.badge}
                                </b>
                            );

                        if (link.icon) {
                            children.push(<i key="icon" className={cx(`AsideNav-itemIcon`, link.icon)} />);
                        } else if (store.asideFolded && depth === 1) {
                            children.push(
                                <i
                                    key="icon"
                                    className={cx(`AsideNav-itemIcon`, link.children ? 'fa fa-folder' : 'fa fa-info')}
                                />
                            );
                        }
                        //如果是系统设计者
                        if(user_type=="designer" ){
                            link.active ||
                            children.push(
                                <i
                                    key="delete"
                                    data-tooltip="删除"
                                    data-position="bottom"
                                    className={'navbtn fa fa-times'}
                                    onClick={(e: React.MouseEvent) => {
                                        e.preventDefault();
                                        console.log(link);
                                        confirm('确认要删除').then(confirmed => {
                                            console.log(link);
                                            console.log(paths);
                                            confirmed && store.removePageAt(paths.indexOf(link.path),link.id);
                                        });
                                    }}
                                />
                            );
                                    
                            children.push(
                                <i
                                    key="edit"
                                    data-tooltip="编辑页面"
                                    data-position="bottom"
                                    className={'navbtn fa fa-pencil'}
                                    onClick={(e: React.MouseEvent) => {
                                        e.preventDefault();
                                        history.push(`/edit/${paths.indexOf(link.path)}`);
                                    }}
                                />
                            );
                        }     
                        
                        // children.push(
                        //     <i
                        //         key="editNav"
                        //         data-tooltip="编辑导航"
                        //         data-position="bottom"
                        //         className={'navbtn  fa fa-list-ol'}
                        //         onClick={() => store.setEditPageIsOpen(true)}

                        //     />
                        // );

                        // children.push(
                        //     <ul className="a-AsideNav-subList">
                        //         <li className="a-AsideNav-subHeader"><a>表单页面</a></li>
                        //         <li className="a-AsideNav-item is-active"><a><span
                        //             className="a-AsideNav-itemArrow"></span><span
                        //             className="a-AsideNav-itemLabel">常规表单</span></a>
                        //             <ul className="a-AsideNav-subList">
                        //                 <li className="a-AsideNav-subHeader"><a>常规表单</a>
                        //                 </li>
                        //                 <li className="a-AsideNav-item">
                        //                     <a href="/admin/form/basic/advanced">
                        //                     <span
                        //                         className="a-AsideNav-itemLabel">三级目录测试</span>
                        //                     </a>
                        //                 </li>
                        //             </ul>
                        //         </li>
                        //
                        //     </ul>
                        // );
                        children.push(
                            <span key="label" className={cx('AsideNav-itemLabel')}>
                                {link.label}
                            </span>
                        );

                        return link.path ? (
                            link.active ? (
                                <a>{children}</a>
                            ) : (
                                <Link to={link.path[0] === '/' ? link.path : `${link.path}`}>{children}</Link>
                            )
                        ) : (
                            <a
                                onClick={
                                    link.onClick ? link.onClick : link.children ? () => toggleExpand(link) : undefined
                                }
                            >
                                {children}
                            </a>
                        );
                    }}
                    isActive={(link: any) =>
                        isActive(link.path && link.path[0] === '/' ? link.path : `${link.path}`, location)
                    }
                />
            );
        }
        function handleConfirm(value: {label: string; icon: string; path: string}) {
            store.addPage({
                ...value,
                schema: {
                    type: 'page',
                    title: value.label,
                    body: '这是你刚刚新增的页面。'
                }
            });
            store.setAddPageIsOpen(false);
        }


        function handleEditConfirm(value: { label: string; icon: string; path: string }) {
            const navigations = store.pages.map(item => ({
                label: item.label,
                path: `/${item.path}`,
                icon: item.icon
            }));
            const paths = navigations.map(item => item.path);
            store.editPage({
                ...value
               
            },paths.indexOf(value.path));
            store.setEditPageIsOpen(false);
        }

        return (
            <Layout
                aside={renderAside()}
                header={renderHeader()}
                folded={store.asideFolded}
                offScreen={store.offScreen}
            >
                <Switch>
                    {store.pages.map(item => (
                        <Route
                            key={item.id}
                            path={`/${item.path}`}
                            render={() => <AMISRenderer schema={item.schema} />}
                        />
                    ))}
                    <Route component={NotFound} />
                </Switch>
                <AddPageModal
                    show={store.addPageIsOpen}
                    onClose={() => store.setAddPageIsOpen(false)}
                    onConfirm={handleConfirm}
                    pages={store.pages.concat()}
                />
                <EditPageModal
                    show={store.editPageIsOpen}
                    onClose={() => store.setEditPageIsOpen(false)}
                    onConfirm={handleEditConfirm}
                    pages={store.pages.concat()}
                />
            </Layout>
        );
    })
);
