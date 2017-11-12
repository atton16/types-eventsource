// 
// Type definitions for EventSource (https://github.com/EventSource/eventsource).
// 
// Created by Attawit Kittikrairit
// 
// Original type definitions file from (https://github.com/sguiheux/EventSource/blob/master/typings.d.ts).
// 

export = EventSource;

declare enum ReadyState {CONNECTING = 0, OPEN = 1, CLOSED = 2}

interface EventSourceInitDict {
  withCredentials?: boolean;
  headers?: Object;
  proxy?: string;
  https?: Object;
  rejectUnauthorized?: boolean; // Backward compatible. Recommend to use https.rejectUnauthorized instead
}

declare class EventSource extends EventTarget {
  static CLOSED: ReadyState;
  static CONNECTING: ReadyState;
  static OPEN: ReadyState;

  url: string;
  readyState: ReadyState;
  onopen: EventListenerOrEventListenerObject;
  onmessage: EventListenerOrEventListenerObject;
  onerror: EventListenerOrEventListenerObject;

  constructor(url: string, eventSourceInitDict?: EventSourceInitDict);

  close(): void;
  
}
