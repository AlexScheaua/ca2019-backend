module.exports = class HtmlResponse {
    static get putSuccessResponse(){
        return `
            <div class="d-flex justify-content-center align-items-center">
                <p class="text-success display-3">Raspunsul dumneavoastra a fost salvat</p>
            </div>
        `
    }

    static get putErrorResponse(){
        return `
            <div class="d-flex justify-content-center align-items-center">
                <p class="text-danger display-3">Raspunsul dumneavoastra nu a fost salvat</p>
            </div>
        `
    }
}