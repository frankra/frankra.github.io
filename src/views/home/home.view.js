
const template = `
<div>
    <div>Home</div>
    {{ test }}
</div>
`

const homeView = Vue.component('home-view', {
    template,
    data: ()=>{
        return {
            test: 'ok'
        }
    }
});


export {
    homeView
}