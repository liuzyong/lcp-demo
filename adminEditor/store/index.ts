import {types, getEnv, applySnapshot, getSnapshot} from 'mobx-state-tree';
import {PageStore} from './Page';
import {when, reaction} from 'mobx';
import { User } from "./User";
let pagIndex = 1;
export const MainStore = types
    .model('MainStore', {
        pages: types.optional(types.array(PageStore), [
            {
                id: `${pagIndex}`,
                path: 'home',
                label: 'This is Home',
                icon: 'fa fa-file',
                schema: {
                    type: 'page',
                    title: 'Hello world-store',
                    body: '初始页面store'
                }
            }
        ]),
        theme: 'default',
        user: types.optional(User, {}),
        asideFixed: true,
        asideFolded: false,
        offScreen: false,
        addPageIsOpen: false,
        editPageIsOpen: false,
        preview: false,
        schema: types.frozen()
    })
    .views(self => ({
        get fetcher() {
            return getEnv(self).fetcher;
        },
        get notify() {
            return getEnv(self).notify;
        },
        get alert() {
            return getEnv(self).alert;
        },
        get copy() {
            return getEnv(self).copy;
        }
    }))
    .actions(self => {
        function toggleAsideFolded() {
            self.asideFolded = !self.asideFolded;
        }

        function toggleAsideFixed() {
            self.asideFixed = !self.asideFixed;
        }

        function toggleOffScreen() {
            self.offScreen = !self.offScreen;
        }

        function setAddPageIsOpen(isOpened: boolean) {
            self.addPageIsOpen = isOpened;
        }

        function setEditPageIsOpen(isOpened: boolean) {
            self.editPageIsOpen = isOpened;
        }
        function addPage(data: {label: string; path: string; icon?: string; schema?: any}) {
            self.pages.push(
                PageStore.create({
                    ...data,
                    id: `${++pagIndex}`
                })
            );
        }

        function editPage(data: {label: string; path: string; icon?: string;}, id?: any) {
            // self.pages.push(
            //     PageStore.create({
            //         ...data,
            //         id: `${++pagIndex}`
            //     })
            // );
        }

        function removePageAt(index: number, id: any) {
            self.pages.splice(index, 1);
        }

        function updatePageSchemaAt(index: number) {
            self.pages[index].updateSchema(self.schema);
        }

        function updateSchema(value: any) {
            self.schema = value;
        }

        function setPreview(value: boolean) {
            self.preview = value;
        }

        return {
            toggleAsideFolded,
            toggleAsideFixed,
            toggleOffScreen,
            setAddPageIsOpen,
            setEditPageIsOpen,
            addPage,
            editPage,
            removePageAt,
            updatePageSchemaAt,
            updateSchema,
            setPreview,
            afterCreate() {
                console.log("no no no ")
                // persist store
                if (typeof window !== 'undefined' && window.localStorage) {
                    const storeData = window.localStorage.getItem('store');
                    if (storeData) applySnapshot(self, JSON.parse(storeData));

                    reaction(
                        () => getSnapshot(self),
                        json => {
                            window.localStorage.setItem('store', JSON.stringify(json));
                        }
                    );
                }
            }
        };
    });

export type IMainStore = typeof MainStore.Type;
