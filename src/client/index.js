import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import { sentiment } from './js/sentiment.js';
import { summarize } from './js/summarize.js';
import { validateUrl } from "./js/validateURL";

export {
  sentiment,
  summarize,
  validateUrl
}