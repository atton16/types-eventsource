declare enum ReadyState {CONNECTING = 0, OPEN = 1, CLOSED = 2}

export default class EventSource extends EventTarget {
  CONNECTING: ReadyState;
  OPEN: ReadyState;
  CLOSED: ReadyState;

  constructor(url: string, eventSourceInitDict?: EventSourceInitDict);
  url: string;
  readyState: ReadyState;
  onopen: EventListenerOrEventListenerObject;
  onmessage: EventListenerOrEventListenerObject;
  onerror: EventListenerOrEventListenerObject;
  close: () => void;
}

interface EventSourceInitDict {
  withCredentials?: boolean;
  headers?: Object;
  proxy?: string;
  https?: Object;
  rejectUnauthorized?: boolean; // Backward compatible. Recommend to use https.rejectUnauthorized instead
}
