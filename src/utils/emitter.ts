import mitt from "mitt";

type Events = {
    'send-bro':string
}

const emitter = mitt<Events>();

export default emitter;
