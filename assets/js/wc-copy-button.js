class CopyButton extends HTMLElement {
    connectedCallback() {
        this.button = this.querySelector(".btn");
        this.render();
        this.clipboard = new ClipboardJS(".btn");
        this.clipboard.on("success", this.handleCopyEvent.bind(this));
    }

    handleCopyEvent(event) {
        let originalText = this.button.innerHTML;
        let originalWidth = this.button.offsetWidth;
        let updatedText = `Copied!`;

        this.button.innerHTML = updatedText;
        this.button.style.width = `${originalWidth}px`; // Preserve the width to avoid jank

        // Unselect the text from the copy target
        window.getSelection().removeAllRanges();

        setTimeout(() => {
            this.button.innerHTML = originalText;
            this.button.style.width = "unset";
        }, 2000);
    }

    render() {
        this.button.setAttribute("data-clipboard-target", `#content`);
        this.button.removeAttribute("hidden");
    }
}

window.customElements.define("copy-button", CopyButton);
