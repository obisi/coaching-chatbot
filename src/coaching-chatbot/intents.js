module.exports = {
    GREETING: {
        any: [
          /^moi(?:kka)?/i,
          /^mo(?:ro)?/i,
          /^morjens(?:ta)/i,
          /^terve/i,
          /^tere/i,
          /^hei/i,
        ],
    },

    YES: {
        any: [
          /^[kj]/i,
          /^kyl(?:lä)?/i,
          /^j[ou]{2,}/i,
          /^ok/i,
          /^yes/i,
          /^(?:oo)?koo/i,
          /^jep[as]?/i,
        ],
    },

    NO: {
        any: [
          /^e/i,
          /^ei/i,
          /^en/i,
          /^emmä/i,
          /^no/i,
        ],
    },

    SET: {
        any: /^(?:lisää|aseta)\s*(?:mun|minun|mulle|minulle)?/i,
    },

    CHANGE: {
        any: /^(?:vaihda|muuta|aseta)\s*(?:mun|minun|mulle|minulle)?/i,
    },

    FIND: {
        any: /^(?:etsi|hae)/i,
    },

    NEXT: {
        any: [
          /^seuraava/i,
          /^myöhemmin/i,
          /^later/i,
        ],
    },

    SET_OR_CHANGE: {
        any: [
          '#SET',
          '#CHANGE',
        ],
    },

    SHOW: {
        any: /^näytä/i,
    },

    STOP: {
        any: [
          /^lopeta/i,
          /^keskeytä/i,
        ],
    },

    BREAK: {
        any: [
          /^hajoi?ta/i,
          /^riko/i,
          /^särj?e/i,
        ],
    },

    STOP_OR_BREAK: {
        any: [
          '#STOP',
          '#BREAK',
        ],
    },

    OPTIONAL_VALUE: {
        any: /(\w.*)?/i,
        match: (match) => match[1] || true,
    },

    NAME: {
        any: /^(?:nimi|nimeä|nimeksi|nimekseni|nimeni)/i,
    },

    JOB: {
        any: [
          /^ammat(?:tia?|iksi|ikseni|tini)/i,
          /^työ(?:tä|ksi|kseni|ni)/i,
        ],
    },

    AGE: {
        any: /^(?:ikää?|iäksi)/i,
    },

    PLACE: {
        any: /^paikka(?:kunta)?a?/i,
    },

    PAIR: {
        any: /^paria?/i,
    },

    MEETING_FREQUENCY: {
        any: [
          /^tapaamisväliä?/i,
          /^väliä?/i,
        ],
    },

    SEARCHING: {
        any: [
          /^(?:parin ?)?(?:haku|hakeminen)/i,
          /^etsiminen/i,
        ],
    },

    PAIR_REQUEST: {
        any: [
          /^parinhaku(?:pyyntö|pyynnöt)/i,
          /^(?:pyyntö|pyynnöt)/i,
        ],
    },

    CHANGE_NAME: {
        each: [
          '#CHANGE',
          '#NAME',
          '#OPTIONAL_VALUE',
        ],
    },

    CHANGE_JOB: {
        each: [
          '#CHANGE',
          '#JOB',
          '#OPTIONAL_VALUE',
        ],
    },

    SET_AGE: {
        each: [
          '#SET_OR_CHANGE',
          '#AGE',
          '#OPTIONAL_VALUE',
        ],
    },

    SET_PLACE: {
        each: [
          '#SET_OR_CHANGE',
          '#PLACE',
          '#OPTIONAL_VALUE',
        ],
    },

    FIND_PAIR: {
        each: [
          '#FIND',
          '#PAIR',
        ],
    },

    CHANGE_MEETING_FREQUENCY: {
        each: [
          '#CHANGE',
          '#MEETING_FREQUENCY',
        ],
    },

    RESET: {
        any: [
          /^aloita alusta/i,
        ],
    },

    STOP_SEARCHING: {
        each: [
          '#STOP',
          '#SEARCHING',
        ],
    },

    SHOW_PAIR_REQUESTS: {
        each: [
          '#SHOW',
          '#PAIR_REQUEST',
        ],
    },

    COMMUNICATION_METHODS: {
        any: [
          /^Skype/i,
          /^Puhelin/i,
          /^Kahvila/i,
        ],
    },

    MEETING_FREQUENCIES: {
        any: [
          /^Arkipäivisin/i,
          /^Kerran viikossa/i,
          /^Joka toinen viikko/i,
        ],
    },

    BREAK_PAIR: {
        each: [
          '#STOP_OR_BREAK',
          /^pari/i,
        ],
    },
};
