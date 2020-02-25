let TREEFROG_SERVICE = (() => 
{
    let _getGetStartedContent = () => 
    {
        let contentStr = `
            <h1>Get Started Content</h1>
            <p>This is the screen where you will create your navigation and page content.</p>
            <p>First, you will need to create a main navigation. Once you have created a main navigation you can create a sub-navigation if you would like to.</p>
            <p>Once you create either a nav or sub-nav a text editor will pop up and you will be allowed to create your page content.</p>
        `;

        return contentStr;
    }

    let _getCreateNavButtons = () => 
    {
        let buttonString = `
            <span class="btn btn-dark main-nav">Create Main Nav</span>
            <span class="btn btn-dark sub-nav">Create Sub Nav</span>
        `;

        return buttonString;
    }

    let _getHomeContent = () => 
    {
        let contentStr = `
            <h1>Welcome to the Treefrog CMS</h1>
            <p>
            Here you will create your content for your webpages. You won't be able
            to create all page elements but only the content for the page.
            </p>
            <p>
            You must first create the navigation. Once you have the navigation
            created you can add page content and publish the page. You can even
            add sub navigation as well.
            </p>
            <p>
            Your fist step is to click on the Add Navigation link and add your
            first navigation link.
            </p>
        `;

        return contentStr;
    }

    let _getHomeStartButton = () =>
    {
        let buttonString = `
            <span class="btn btn-dark get-started">Get Started</span>
        `;

        return buttonString;
    }

    let _getCreateMainNavContent = ()=>
    {
        let content = `
        <div class="alert-box-wrapper">
            <div class="alert-box-text-wrapper">
            <h2>Use this box to create navigation links</h2>
            <p>You can create main navigation and sub navigation. To create sub-navigation you will need to first select a main nav and then create the sub nav.</p>
            <p>Use the text box below to enter the name of your main navigation.</p>
            <input placeholder="Main Navigation">
            </div>
            <div class="alert-box-btn-wrapper">
            <span class="btn btn-light create-main-nav">Create Main Nav</span>
            <span class="btn btn-light">Cancel</span>
            </div>
            </div>
        `;

        return content;
    }
   
    let _getCreateMainNavEditor = ()=>
    {
        let content = `
        <h1>Treefrog CMS </h1>
        <p>Now you have your navigation set now you can create your content. Below you will see your navigation name and a text editor. Create your content in the text editor and then click on "Save Page Info". Once you have done that click on "PREVIEW SITE" to see what your web page looks like.</p>
        <h4>Nav > <span class="cur-main-nav">Products</span> </h4>
        <div id="editor"></div>
        `;

        return content;
    }

    let _getCreateSubNavEditor = ()=>
    {
        let content = `
        <h1>Treefrog CMS </h1>
                <p>Now you have your navigation set now you can create your content. Below you will see your navigation name and a text editor. Create your content in the text editor and then click on "Save Page Info". Once you have done that click on "PREVIEW SITE" to see what your web page looks like.</p>
                <h4>Nav > <span class="cur-main-nav">Products</span> > <span class="cur-sub-nav">Toys</span> </h4>
                <div id="editor"></div>
        `;

        return content;
    }


    let _getCreateNavEditorButton = () => 
    {
        let button = `<span class="btn btn-dark">Save Page Info</span>`

        return button;
    };


    let _getCreateSubNavContent = ()=>
    {
        let content = `
            <div class="alert-box-wrapper">
            <div class="alert-box-text-wrapper">
            <h2>Create Sub Navigation</h2>
            <p>In order to create a a sub navigation you need to select a main nav.</p>
            <p>Select a main navigation</p>
            <select>
                <option selected>-----</option>
            </select>
            <p>Using the text box below enter the name of your sub navigations</p>
            <input placholder="Sub Navigation">
            </div>
            <div class="alert-box-btn-wrapper">
            <span class="btn btn-light">Create Sub Nav</span>
            <span class="btn btn-light cancel-nav">Cancel</span>
            </div>
            </div>
        `;

        return content;
    }

   

    return {
        getCreateNavEditorButton: _getCreateNavEditorButton,
        getGetStartedContent: _getGetStartedContent,
        getCreateNavButtons: _getCreateNavButtons,
        getHomeContent: _getHomeContent,
        getHomeStartButton: _getHomeStartButton,
        getCreateMainNavContent: _getCreateMainNavContent,
        getCreateMainNavEditor: _getCreateMainNavEditor,
        getCreateSubNavContent: _getCreateSubNavContent,
        getCreateSubNavEditor: _getCreateSubNavEditor
    }
})();