enum PlausibleEvents {
  ADD_FOX = 'add_fox',
  REMOVE_FOX = 'remove_fox'
};

type Options = {
  callback?: () => void;
  props: Record<string, string | number | undefined>
}

export interface window {
  plausible: (value: PlausibleEvents, options?: Options) => void;
}