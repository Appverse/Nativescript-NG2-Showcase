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