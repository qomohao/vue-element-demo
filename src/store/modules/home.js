export default {
    state:{
        // 菜单折叠
        menuFold:false,
    },
    mutations:{
        setMenuFold(state, val) {
            state.menuShow = val;
        }
    }
}