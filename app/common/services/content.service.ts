import {Injectable} from "@angular/core";

@Injectable()
export class ContentService {

    constructor() {
    }

    public getFilms(): any[]{
        return this.films;
    }

    public getJedis(): string[]{
        return this.jedis;
    }

    public getOpening(): string{
        return this.opening;
    }

    public getColors(): any[]{
        return this.colors;
    }

    public getFontColors(): any[]{
        return this.fontColors;
    }

    public getStyles(): any[]{
        return this.styles;
    }

    public getTextStyles(): any[]{
        return this.textStyles;
    }

    public getContacts(): any[]{
        return this.contacts;
    }

    public getThemes(): any[]{
        return this.themes;
    }

    private films: any[] = [
        {ep: "Episode I", name: "The Phantom Menace", year: "1999"},
        {ep: "Episode II", name: "Attack of the Clones", year: "2001"},
        {ep: "Episode III", name: "Revenge of the Sith", year: "2003"},
        {ep: "Episode IV", name: "A New Hope", year: "1977"},
        {ep: "Episode V", name: "The Empire Strikes Back", year: "1980"},
        {ep: "Episode VI", name: "Return of the Jedi", year: "1983"},
        {ep: "Episode VII", name: "The Force Awakens", year: "2015"},
        {ep: "Episode VIII", name: "", year: "2017"},
        {ep: "Episode IX", name: "", year: "2019"}
    ]

    private contacts: any[] = [
        {name: "Yoda", race: "Unknown", number: "689574123", icon: "res://yoda", from: "Dagobah"},
        {name: "Chewbacca", race: " Wookie", number: "654321987", icon: "http://www.highpants.net/wp-content/uploads/2016/01/Highpants-Chewbacca-200x200.jpg", from: "Kashyyyk"},
        {name: "Han", race: "Human", number: "684521478", icon: "http://www.technobuffalo.com/wp-content/uploads/2015/06/grumpy-harrison-ford-roles-han-solo-3-1088594-TwoByOne-200x200.jpg", from: "Corellia"},
        {name: "Jabba", race: "Hutt", number: "625895478", icon: "http://images.forbes.com/media/lists/fictional/2008/jabbathehutt.jpg", from: "Tatooine"},
        {name: "Boba", race: "Human Clone", number: "635214563", icon: "http://www.technobuffalo.com/wp-content/uploads/2014/04/Boba-Fett-200x200.jpg", from: "Kamino"},
        {name: "Anakin", race: "Human", number: "687459852", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYwSge9-4jEAVjN3roqFlJc3BXOlWI7yTiGvI6ZyXHLB6K4MdIg", from: "Tatooine"},
        {name: "Ben", race: "Human", number: "678452154", icon: "http://rs213.pbsrc.com/albums/cc190/thatguyno1/Ben%20Kenobi%20screen%20shots/IMG_1037b.jpg~c200", from: "Stewjon"},
        {name: "Luke", race: "Human", number: "687458523", icon: "http://www.technobuffalo.com/wp-content/uploads/2015/11/lukeskywalker-200x200.jpg", from: "Tatooine"},
        {name: "Leia", race: "Human", number: "613548795", icon: "http://www.technobuffalo.com/wp-content/uploads/2015/06/leia-princess-leia-organa-solo-skywalker-8413731-1024-768-200x200.jpg", from: "Naboo"},
        {name: "C-3PO", race: "Droid", number: "659852364", icon: "https://qph.is.quoracdn.net/main-thumb-t-47346-200-VG7p4ldgrtX1VNGAlD5PHCOc9Bzeqj3a.jpeg", from: "Tatooine"},
        {name: "R2-D2", race: "Droid", number: "648521745", icon: "https://pbs.twimg.com/profile_images/679154009949650944/hK_N09QV.jpg", from: "Naboo"},
        {name: "Palpatine", race: "Human", number: "695823568", icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRrwR4XEexMmU7VLxdbIiROmscHvuZG7dAL1QMM5jyQrfL_NM0n", from: "Naboo"},
        {name: "Lando", race: "Human", number: "698531475", icon: "http://vignette4.wikia.nocookie.net/starwars/images/a/a7/Lando-AoD.jpg/revision/latest/scale-to-width-down/200?cb=20090928202401", from: "Bespin"},
        {name: "Greedo", race: "Rodian", number: "695824651", icon: "http://rs625.pbsrc.com/albums/tt331/Anthony8934/Star%20Wars%20Clone%20Commanders/Star%20Wars%20Sith/Star%20Wars%20Bounty%20Hunter/Greedo.jpg~c200", from: "Rodia"},
        {name: "Ackbar", race: "Mon Calamari", number: "6687595824", icon: "http://media.npr.org/assets/blogs/thetwo-way/images/2010/03/ackbar-dfdfea93d8ed875f978acf5fcbf63b65c0cf7033-s300-c85.jpg", from: "Mon Cala"}
    ]

    private themes: any[] = [
        {name: "GFT", path: "app.css"},
        {name: "Dark Side", path: "themes/dark_side.css"},
        {name: "Pinky", path: "themes/pinky.css"},
        {name: "Neon", path: "themes/neon.css"}
    ]

    private jedis: string[] = ["Yoda", "Mace Windu", "Ashoka Tano", "Obi-Wan Kenobi", "Qui-Gon Jinn", "Anakin Skywalker", "Luke SkyWalker"]

    private opening: string = "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.  Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of thestolen plans that can save her people and restore freedom to the galaxy...."

    private colors: any[] = [
        {title: "LIGHT", styles: [
            {title: "DEFAULT", style: "light"},
            {title: "OUTLINED", style: "light-outlined"},
            {title: "CLEAR", style: "light-clear"},
            {title: "FULL", style: "light-full"}
        ]},
        {title: "STABLE", styles: [
            {title: "DEFAULT", style: "stable"},
            {title: "OUTLINED", style: "stable-outlined"},
            {title: "CLEAR", style: "stable-clear"},
            {title: "FULL", style: "stable-full"}
        ]},
        {title: "DARK", styles: [
            {title: "DEFAULT", style: "dark"},
            {title: "OUTLINED", style: "dark-outlined"},
            {title: "CLEAR", styles: "dark-clear"},
            {title: "FULL", style: "dark-full"}
        ]},
        {title: "PRIMARY", styles: [
            {title: "DEFAULT", style: "primary"},
            {title: "OUTLINED", style: "primary-outlined"},
            {title: "CLEAR", style: "primary-clear"},
            {title: "FULL", style: "primary-full"}
        ]},
        {title: "INFO", styles: [
            {title: "DEFAULT", style: "info"},
            {title: "OUTLINED", style: "info-outlined"},
            {title: "CLEAR", style: "info-clear"},
            {title: "FULL", style: "info-full"}
        ]},
        {title: "SUCCESS", styles: [
            {title: "DEFAULT", style: "success"},
            {title: "OUTLINED", style: "success-outlined"},
            {title: "CLEAR", style: "success-clear"},
            {title: "FULL", style: "success-full"}
        ]},
        {title: "WARNING", styles: [
            {title: "DEFAULT", style: "warning"},
            {title: "OUTLINED", style: "warning-outlined"},
            {title: "CLEAR", style: "warning-clear"},
            {title: "FULL", style: "warning-full"}
        ]},
        {title: "DANGER", styles: [
            {title: "DEFAULT", style: "danger"},
            {title: "OUTLINED", style: "danger-outlined"},
            {title: "CLEAR", style: "danger-clear"},
            {title: "FULL", style: "danger-full"}
        ]},
    ]

    private styles: any[] = [
        {title: "DEFAULT", styles: [
            {name: "LIGHT", style: "light"},
            {name: "STABLE", style: "stable"},
            {name: "DARK", style: "dark"},
            {name: "PRIMARY", style: "primary"},
            {name: "INFO", style: "info"},
            {name: "SUCCESS", style: "success"},
            {name: "WARNING", style: "warning"},
            {name: "DANGER", style: "danger"},
        ]},
        {title: "OUTLINED", styles: [
            {name: "LIGHT", style: "light-outlined"},
            {name: "STABLE", style: "stable-outlined"},
            {name: "DARK", style: "dark-outlined"},
            {name: "PRIMARY", style: "primary-outlined"},
            {name: "INFO", style: "info-outlined"},
            {name: "SUCCESS", style: "success-outlined"},
            {name: "WARNING", style: "warning-outlined"},
            {name: "DANGER", style: "danger-outlined"},
        ]},
        {title: "CLEAR", styles: [
            {name: "LIGHT", style: "light-clear"},
            {name: "STABLE", style: "stable-clear"},
            {name: "DARK", style: "dark-clear"},
            {name: "PRIMARY", style: "primary-clear"},
            {name: "INFO", style: "info-clear"},
            {name: "SUCCESS", style: "success-clear"},
            {name: "WARNING", style: "warning-clear"},
            {name: "DANGER", style: "danger-clear"},
        ]},
        {title: "FULL", styles: [
            {name: "LIGHT", style: "light-full"},
            {name: "STABLE", style: "stable-full"},
            {name: "DARK", style: "dark-full"},
            {name: "PRIMARY", style: "primary-full"},
            {name: "INFO", style: "info-full"},
            {name: "SUCCESS", style: "success-full"},
            {name: "WARNING", style: "warning-full"},
            {name: "DANGER", style: "danger-full"},
        ]},
    ]

    private fontColors: any[] = [
        {name: "LIGHT", style: "light-font"},
        {name: "STABLE", style: "stable-font"},
        {name: "DARK", style: "dark-font"},
        {name: "PRIMARY", style: "primary-font"},
        {name: "INFO", style: "info-font"},
        {name: "SUCCESS", style: "success-font"},
        {name: "WARNING", style: "warning-font"},
        {name: "DANGER", style: "danger-font"}
    ]

    private textStyles: any[] = [
            {name: "H1", style: "h1"},
            {name: "H2", style: "h2"},
            {name: "H3", style: "h3"},
            {name: "H4", style: "h4"},
            {name: "H5", style: "h5"},
            {name: "H6", style: "h6"},
            {name: "Italic", style: "italic"},
            {name: "Bold", style: "bold"}
    ]

}