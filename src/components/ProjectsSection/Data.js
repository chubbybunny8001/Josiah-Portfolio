//About Me Section
export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Me',
    heading: 'Who am I?',
    description: "I am a newly graduated Full Stack Web Designer. I enjoy coding, and am willing to take the time to learn new things and new ways to do things. I love music, and finanancial shenanigans.", //description = subtitle
    buttonLabel: 'Check my Socials!',
    toLink: 'socials',
    imgStart: false,
    img: require('../../images/me.jpg').default, //Need photo tha is compatable with this. PNGs are not.
    alt: 'Picture of me',
    dark: "true",
    primary: "true",
    darkText: false
}

//What I Know Section
export const homeObjTwo = {
    id: 'frameworks',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'What I Know',
    heading: 'Full Stack Web Development',
    description: "Like I said, I am newly graduated Full Stack Web Designer. I graduated from Bethel's School of Technology with a Certificate in Full Stack Web Design. My main language I work in right now, is JavaScript, but eventually want to push myself into C++ (For game dev). ", //description = subtitle
    buttonLabel: 'Link to Resume',
    toLink: 'socials',
    imgStart: true,
    img: require('../../images/bst.png').default, //Need photo tha is compatable with this. PNGs are not.
    alt: 'Picture of School',
    dark: "",
    primary: "",
    darkText: true
}

//Projects Section
export const homeObjThree = {
    id: 'projects',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Projects',
    heading: 'What have I done...',
    description: "Scroll down to see my most current project...", //description = subtitle
    buttonLabel: 'Look at recent project...',
    toLink: 'experience',
    imgStart: false,
    img: require('../../images/Github.png').default, //Need photo tha is compatable with this. PNGs are not.
    alt: 'Picture of github repos',
    dark: "true",
    primary: "true",
    darkText: false,
    toLink: 'projects2'
}

//Search up unDraw for svg stuff...
//6 pictures needed...