export interface Theme {
  name: string;
  components: Component[];
  background: string;
}

export interface Component {
  name: string;
  word: string;
  image: string;
  sound: string;
}

export interface Answer {
  component: Component;
  letter: string;
}
