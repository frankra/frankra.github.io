const template = `
<div class="header row mb-3">
    <div class="p-4 col-sm-5">
        <div class="name">
            <span>{{resume.name}}</span>
        </div>
        <div class="role">
            <span>{{resume.role}}</span>
        </div>
        <div class="mt-3 header-secondary-text">
            <span>{{resume.description}}</span>
        </div>
    </div>
    <div class="col-sm-2 avatar-container">
        <img src="https://avatars.githubusercontent.com/u/5017439?v=4" class="avatar"/>
    </div>

    <div class="p-4 col-sm-5 text-end header-secondary-text">
        <div>
            <a v-bind:href="'mailto:' + resume.email">{{resume.email}}</a>
            <i class="ms-2 bi bi-envelope"></i>
        </div>
        <div>
            {{resume.phone}}
            <i class="ms-2 bi bi-phone"></i>
        </div>
        <div>
            {{resume.location}}
            <i class="ms-2 bi bi-pin-map"></i>
        </div>
        <div>
            <a v-bind:href="resume.linkedinUrl">{{this.removeHttpsFromUrl(resume.linkedinUrl)}}</a>
            <i class="ms-2 bi bi-linkedin"></i>
        </div>
        <div>
            <a v-bind:href="resume.webUrl">{{this.removeHttpsFromUrl(resume.webUrl)}}</a>
            <i class="ms-2 bi bi-globe"></i>
        </div>
    </div>
</div>
`;

const resumeHeader = Vue.component('resume-header', {
    props: ['resume'],
    template,
    methods: {
        removeHttpsFromUrl(url) {
            if (url) {
                return url.replace(`https://`, '');
            }
        }
    }
});


export {
    resumeHeader
}