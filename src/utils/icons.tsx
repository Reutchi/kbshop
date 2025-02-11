const arrowDropDownIcon = () => (
    <svg
        width="30"
        height="25"
        fill="white"
        aria-hidden="true"
        focusable="false"
        role="presentation"
        className="icon feather-icon feather-chevron-down"
        viewBox="0 0 24 24"
    >
        <path d="M6 9l6 6 6-6"></path>
    </svg>
);

const arrowSlider = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M16 7.328v-3.328l8 8-8 8v-3.328l-16-4.672z" />
    </svg>
);

const facebookIcon = () => (
    <svg
        width={25}
        aria-hidden="true"
        focusable="false"
        role="presentation"
        className="icon svg-facebook"
        viewBox="0 0 24 24"
    >
        <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"></path>
    </svg>
);

const xIcon = () => (
    <svg
        width={25}
        aria-hidden="true"
        focusable="false"
        role="presentation"
        className="icon svg-twitter svg-x"
        viewBox="0 0 24 24"
    >
        <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        ></path>
    </svg>
);

const pinterestIcon = () => (
    <svg
        width={25}
        aria-hidden="true"
        focusable="false"
        role="presentation"
        className="icon svg-pinterest"
        viewBox="0 0 24 24"
    >
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path>
    </svg>
);

const Icons = {
    arrowDropDownIcon,
    arrowSlider,
    facebookIcon,
    xIcon,
    pinterestIcon,
};

export default Icons;
