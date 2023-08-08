import { css, html, TfBase } from './TfBase.js';

const style = css`
  * {
    --tf-thumb-color: var(--tf-sys-light-secondary);
    --tf-track-fill-color: var(--tf-sys-light-secondary-container);
    --tf-outline-color: var(--tf-sys-light-outline);
  }

  .container {
    position: relative;
    width: 100%;
    height: 100px;
    margin-top: 30px;
  }

  input[type='range'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    outline: none;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    background-color: transparent;
  }
  .value-container input {
   
    border: none;
    outline: none;
    box-shadow: none;
    background-color: transparent;
   
  }
  .slider-track {
    height: 1rem;
    border: 1px solid var(--tf-outline-color);
    border-radius: 0.5em;
    background: var(--tf-sys-light-surface-variant);
    box-shadow: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 5px;
  }
  input[type='range']::-moz-range-track {
    -moz-appearance: none;
    height: 5px;
  }
  input[type='range']::-ms-track {
    appearance: none;
    height: 5px;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--tf-thumb-color);
    border: 1px solid var(--tf-outline-color);
    box-shadow: none;
    margin-top: -60px;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 -7 16 30' ><path d='M9.99967 13.3333V2.66659H8.66634V13.3333H9.99967ZM12.6663 13.3333V2.66659H11.333V13.3333H12.6663ZM7.33301 13.3333L7.33301 2.66659H5.99967V13.3333H7.33301ZM3.33301 13.3333H4.66634L4.66634 2.66659H3.33301L3.33301 13.3333Z' fill='%23F9F9F8'/></svg>");
    background-size: cover;
    background-position: center;
  }
  input[type='range']:disabled::-webkit-slider-thumb {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 -7 16 30' ><path d='M9.99967 13.3333V2.66659H8.66634V13.3333H9.99967ZM12.6663 13.3333V2.66659H11.333V13.3333H12.6663ZM7.33301 13.3333L7.33301 2.66659H5.99967V13.3333H7.33301ZM3.33301 13.3333H4.66634L4.66634 2.66659H3.33301L3.33301 13.3333Z' fill='%2371787D'/></svg>");
  }

  input[type='range']::-moz-range-thumb {
    -webkit-appearance: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--tf-thumb-color);
    border: 1px solid var(--tf-outline-color);
    box-shadow: none;
    margin-top: -60px;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 -7 16 30' ><path d='M9.99967 13.3333V2.66659H8.66634V13.3333H9.99967ZM12.6663 13.3333V2.66659H11.333V13.3333H12.6663ZM7.33301 13.3333L7.33301 2.66659H5.99967V13.3333H7.33301ZM3.33301 13.3333H4.66634L4.66634 2.66659H3.33301L3.33301 13.3333Z' fill='%23F9F9F8'/></svg>");
    background-size: cover;
    background-position: center;
  }
  input[type='range']::-ms-thumb {
    -webkit-appearance: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--tf-thumb-color);
    border: 1px solid var(--tf-outline-color);
    box-shadow: none;
    margin-top: -60px;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5' height='5' viewBox='0 -7 16 30' ><path d='M9.99967 13.3333V2.66659H8.66634V13.3333H9.99967ZM12.6663 13.3333V2.66659H11.333V13.3333H12.6663ZM7.33301 13.3333L7.33301 2.66659H5.99967V13.3333H7.33301ZM3.33301 13.3333H4.66634L4.66634 2.66659H3.33301L3.33301 13.3333Z' fill='%23F9F9F8'/></svg>");
    background-size: cover;
    background-position: center;
  }

  .input-container {
    display: flex;
    padding: 12px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 24px;
    border: 1px solid var(--tf-read-only-light-outline-opacity-016, rgba(113, 120, 125, 0.16));
    background: var(--theme-sys-light-surface, #f9f9f8);
    width: 100%;
    margin-top: 30px;
    margin-left: -35px;
  }

  .value-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
  }

  .values {
    flex-direction: row;
    display: flex;
    margin-top: -60px;
  }

  .values span {
    display: flex;
    height: 24px;
    flex-direction: column;
    justify-content: center;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.1px;
  }
`;

export class TfDoubleSlider extends TfBase {
  private sliderOne!: HTMLInputElement;
  private sliderTwo!: HTMLInputElement;
  private displayValOne!: HTMLElement | null;
  private displayValTwo!: HTMLElement | null;
  private minGap: number = 0;
  private sliderTrack!: HTMLElement | null;
  private sliderMaxValue: number = 10000;
  private inputOne!: HTMLInputElement | null;
  private inputTwo!: HTMLInputElement | null;

  constructor() {
    super();

    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${style}
        </style>
        <div class="wrapper">
          <div class="container">
            <div class="slider-track"></div>

            <input type="range" min="0" id="slider-1" max="${this.sliderMaxValue.toString()}" />

            <input type="range" min="0" id="slider-2" max="${this.sliderMaxValue.toString()}" />
          </div>
          <div class="values">
            <span>Min</span>
            <div class="value-container">
              <div class="input-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.5 18.5C12.99 18.5 10.82 17.08 9.74 15H15.5L16.5 13H9.08C9.03 12.67 9 12.34 9 12C9 11.66 9.03 11.33 9.08 11H15.5L16.5 9H9.74C10.82 6.92 13 5.5 15.5 5.5C17.11 5.5 18.59 6.09 19.73 7.07L21.5 5.3C19.91 3.87 17.8 3 15.5 3C11.58 3 8.26 5.51 7.02 9H3.5L2.5 11H6.56C6.52 11.33 6.5 11.66 6.5 12C6.5 12.34 6.52 12.67 6.56 13H3.5L2.5 15H7.02C8.26 18.49 11.58 21 15.5 21C17.81 21 19.91 20.13 21.5 18.7L19.72 16.93C18.59 17.91 17.12 18.5 15.5 18.5Z"
                    fill="#250127"
                  />
                </svg>
                <input type="number" id="input-1" value="3000" min="0" max="10000" />
              </div>
            </div>
            <span>Max </span>
            <div class="value-container">
              <div class="input-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.5 18.5C12.99 18.5 10.82 17.08 9.74 15H15.5L16.5 13H9.08C9.03 12.67 9 12.34 9 12C9 11.66 9.03 11.33 9.08 11H15.5L16.5 9H9.74C10.82 6.92 13 5.5 15.5 5.5C17.11 5.5 18.59 6.09 19.73 7.07L21.5 5.3C19.91 3.87 17.8 3 15.5 3C11.58 3 8.26 5.51 7.02 9H3.5L2.5 11H6.56C6.52 11.33 6.5 11.66 6.5 12C6.5 12.34 6.52 12.67 6.56 13H3.5L2.5 15H7.02C8.26 18.49 11.58 21 15.5 21C17.81 21 19.91 20.13 21.5 18.7L19.72 16.93C18.59 17.91 17.12 18.5 15.5 18.5Z"
                    fill="#250127"
                  />
                </svg>
                <input type="number" id="input-2" value="7000" min="0" max="10000" />
              </div>
            </div>
          </div>
        </div>
      `);
    this.displayValOne = this.shadowRoot!.getElementById('input-1') as HTMLInputElement;
    this.displayValTwo = this.shadowRoot!.getElementById('input-2') as HTMLInputElement;

    this.inputOne = this.shadowRoot!.getElementById('input-1') as HTMLInputElement;
    this.inputTwo = this.shadowRoot!.getElementById('input-2') as HTMLInputElement;

    if (this.inputOne && this.inputTwo) {
      this.inputOne.addEventListener('input', () => this.updateSliderValues());
      this.inputTwo.addEventListener('input', () => this.updateSliderValues());
    }

    if (this.sliderOne && this.sliderTwo) {
      this.sliderOne.addEventListener('input', () => this.slideOne());
      this.sliderTwo.addEventListener('input', () => this.slideTwo());
    }
  }
  private updateSliderValues() {
    if (this.inputOne && this.inputTwo && this.sliderOne && this.sliderTwo) {
      const valueOne = parseInt(this.inputOne.value);
      const valueTwo = parseInt(this.inputTwo.value);

      const clampedValueOne = Math.min(Math.max(valueOne, 0), this.sliderMaxValue);
      const clampedValueTwo = Math.min(Math.max(valueTwo, 0), this.sliderMaxValue);

      if (clampedValueTwo - clampedValueOne <= this.minGap) {
        this.inputOne.value = (clampedValueTwo - this.minGap).toString();
        this.inputTwo.value = (clampedValueOne + this.minGap).toString();
      }

      this.displayValOne!.textContent = this.inputOne.value;
      this.displayValTwo!.textContent = this.inputTwo.value;

      this.sliderOne.value = this.inputOne.value;
      this.sliderTwo.value = this.inputTwo.value;

      this.fillColor();
    }
  }

  static get observedAttributes() {
    return ['status', 'userinput'];
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    if (name === 'status') {
      const thumbOne = this.shadowRoot?.getElementById('slider-1') as HTMLInputElement;
      const thumbTwo = this.shadowRoot?.getElementById('slider-2') as HTMLInputElement;
      const sliderTrack = this.shadowRoot?.querySelector('.slider-track') as HTMLElement;

      if (thumbOne && thumbTwo && sliderTrack) {
        switch (newValue) {
          case 'default':
            thumbOne.style.setProperty('--tf-thumb-color', 'var(--tf-sys-light-secondary)');
            thumbTwo.style.setProperty('--tf-thumb-color', 'var(--tf-sys-light-secondary)');
            sliderTrack.style.setProperty(
              '--tf-track-fill-color',
              'var(--tf-sys-light-secondary-container)'
            );
            break;
          case 'focus':
            thumbOne.style.setProperty('--tf-track-fill-color', 'var(--tf-sys-light-secondary)');
            thumbTwo.style.setProperty('--tf-track-fill-color', 'var(--tf-sys-light-secondary)');
            sliderTrack.style.setProperty('--tf-track-fill-color', 'var(--tf-sys-light-secondary)');
            break;
          case 'disabled':
            thumbOne.style.setProperty('--tf-thumb-color', 'var(--tf-sys-light-surface-variant');
            thumbTwo.style.setProperty('--tf-thumb-color', 'var(--tf-sys-light-surface-variant');
            thumbOne.style.setProperty(
              '--tf-track-fill-color',
              'var(--tf-sys-light-surface-variant'
            );
            thumbTwo.style.setProperty(
              '--tf-track-fill-color',
              'var(--tf-sys-light-surface-variant'
            );

            thumbOne.disabled = true;
            thumbTwo.disabled = true;
            break;
          case 'error':
            thumbOne.style.setProperty('--tf-thumb-color', 'var(--tf-sys-light-error-container)');
            thumbTwo.style.setProperty('--tf-thumb-color', 'var(--tf-sys-light-error-container)');
            thumbOne.style.setProperty(
              '--tf-track-fill-color',
              'var(--tf-sys-light-error-container)'
            );
            thumbTwo.style.setProperty(
              '--tf-track-fill-color',
              'var(--tf-sys-light-error-container)'
            );
            thumbOne.style.setProperty('--tf-outline-color', 'var(--tf-sys-light-error)');
            thumbTwo.style.setProperty('--tf-outline-color', 'var(--tf-sys-light-error)');
            break;
        }
      }
    }
  }

  connectedCallback() {
    this.displayValOne = this.shadowRoot!.getElementById('input-1') as HTMLInputElement;
    this.displayValTwo = this.shadowRoot!.getElementById('input-2') as HTMLInputElement;

    this.sliderTrack = this.shadowRoot!.querySelector('.slider-track');

    this.sliderOne = this.shadowRoot!.getElementById('slider-1') as HTMLInputElement;
    this.sliderTwo = this.shadowRoot!.getElementById('slider-2') as HTMLInputElement;

    if (this.sliderOne && this.sliderTwo) {
      this.sliderOne.addEventListener('input', () => this.slideOne());
      this.sliderTwo.addEventListener('input', () => this.slideTwo());
    }

    this.slideOne();
    this.slideTwo();
    const userInputAttribute = this.getAttribute('userinput');
    const isUserInput = userInputAttribute === 'true';
    this.displayValuesAndLabels(isUserInput);
  }

  private displayValuesAndLabels(show: boolean) {
    const valuesContainer = this.shadowRoot!.querySelector('.values') as HTMLElement;
    if (valuesContainer) {
      valuesContainer.style.display = show ? 'flex' : 'none';
    }
  }
  private slideOne() {
    if (this.sliderOne && this.displayValOne) {
      let valueOne = parseInt(this.sliderOne.value);
      this.displayValOne.textContent = valueOne.toString();

      if (this.inputOne) {
        this.inputOne.value = valueOne.toString();
      }

      this.updateSliderValues();
    }
  }

  private slideTwo() {
    if (this.sliderTwo && this.displayValTwo) {
      let valueTwo = parseInt(this.sliderTwo.value);
      this.displayValTwo.textContent = valueTwo.toString();

      if (this.inputTwo) {
        this.inputTwo.value = valueTwo.toString();
      }

      this.updateSliderValues();
    }
  }

  private fillColor() {
    if (this.sliderOne && this.sliderTwo && this.sliderTrack) {
      const percent1 = (parseInt(this.sliderOne.value) / this.sliderMaxValue) * 100;
      const percent2 = (parseInt(this.sliderTwo.value) / this.sliderMaxValue) * 100;
      const status = this.status;
      const thumbsInteracted =
        this.sliderOne.matches(':hover') ||
        this.sliderOne.matches(':active') ||
        this.sliderTwo.matches(':hover') ||
        this.sliderTwo.matches(':active');

      switch (status) {
        case 'default':
          if (thumbsInteracted) {
            this.sliderTrack.style.background = `linear-gradient(to right, var(--tf-sys-light-surface-variant)  ${percent1}%, var(--tf-sys-light-secondary) ${percent1}%, var(--tf-sys-light-secondary) ${percent2}%, var(--tf-sys-light-surface-variant)  ${percent2}%)`;
          } else {
            this.sliderTrack.style.background = `linear-gradient(to right,var(--tf-sys-light-surface-variant)  ${percent1}%, var(--tf-sys-light-secondary-container) ${percent1}%, var(--tf-sys-light-secondary-container) ${percent2}%,var(--tf-sys-light-surface-variant)  ${percent2}%)`;
          }
          break;
        case 'focus':
          this.sliderTrack.style.background = `linear-gradient(to right, var(--tf-sys-light-surface-variant)  ${percent1}%, var(--tf-sys-light-secondary) ${percent1}%, var(--tf-sys-light-secondary) ${percent2}%, var(--tf-sys-light-surface-variant)  ${percent2}%)`;
          break;
        case 'disabled':
          this.sliderTrack.style.background = `linear-gradient(to right, var(--tf-sys-light-surface-variant) ${percent1}%, var(--tf-sys-light-surface-variant) ${percent1}%, var(--tf-sys-light-surface-variant) ${percent2}%, var(--tf-sys-light-surface-variant) ${percent2}%)`;

          break;
        case 'error':
          this.sliderTrack.style.background = `linear-gradient(to right, var(--tf-sys-light-surface-variant)  ${percent1}%, var(--tf-sys-light-error-container) ${percent1}%, var(--tf-sys-light-error-container) ${percent2}%, var(--tf-sys-light-surface-variant)  ${percent2}%)`;
          break;
        default:
          break;
      }
    }
  }

  get status() {
    return this.getAttribute('status') || 'default';
  }

  set status(value) {
    this.setAttribute('status', value);
  }
  get userInput() {
    return this.getAttribute('userinput') || 'false';
  }

  set userInput(value) {
    this.setAttribute('userinput', value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-double-slider': TfDoubleSlider;
  }
}

customElements.define('tf-double-slider', TfDoubleSlider);
