import { css } from "https://cdn.jsdelivr.net/npm/lit@2/+esm";

const resets = css`
  ul {
    list-style: none;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  button {
    border: 0;
    cursor: pointer;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;
// this was generated from theme builder and is a copy of css/typography.module.css
const typography = css`
  .display-large {
    font-family: var(--md-sys-typescale-display-large-font-family-name);
    font-style: var(--md-sys-typescale-display-large-font-family-style);
    font-weight: var(--md-sys-typescale-display-large-font-weight);
    font-size: var(--md-sys-typescale-display-large-font-size);
    letter-spacing: var(--md-sys-typescale-display-large-tracking);
    line-height: var(--md-sys-typescale-display-large-height);
    text-transform: var(--md-sys-typescale-display-large-text-transform);
    text-decoration: var(--md-sys-typescale-display-large-text-decoration);
  }
  .display-medium {
    font-family: var(--md-sys-typescale-display-medium-font-family-name);
    font-style: var(--md-sys-typescale-display-medium-font-family-style);
    font-weight: var(--md-sys-typescale-display-medium-font-weight);
    font-size: var(--md-sys-typescale-display-medium-font-size);
    letter-spacing: var(--md-sys-typescale-display-medium-tracking);
    line-height: var(--md-sys-typescale-display-medium-height);
    text-transform: var(--md-sys-typescale-display-medium-text-transform);
    text-decoration: var(--md-sys-typescale-display-medium-text-decoration);
  }
  .display-small {
    font-family: var(--md-sys-typescale-display-small-font-family-name);
    font-style: var(--md-sys-typescale-display-small-font-family-style);
    font-weight: var(--md-sys-typescale-display-small-font-weight);
    font-size: var(--md-sys-typescale-display-small-font-size);
    letter-spacing: var(--md-sys-typescale-display-small-tracking);
    line-height: var(--md-sys-typescale-display-small-height);
    text-transform: var(--md-sys-typescale-display-small-text-transform);
    text-decoration: var(--md-sys-typescale-display-small-text-decoration);
  }
  .headline-large {
    font-family: var(--md-sys-typescale-headline-large-font-family-name);
    font-style: var(--md-sys-typescale-headline-large-font-family-style);
    font-weight: var(--md-sys-typescale-headline-large-font-weight);
    font-size: var(--md-sys-typescale-headline-large-font-size);
    letter-spacing: var(--md-sys-typescale-headline-large-tracking);
    line-height: var(--md-sys-typescale-headline-large-height);
    text-transform: var(--md-sys-typescale-headline-large-text-transform);
    text-decoration: var(--md-sys-typescale-headline-large-text-decoration);
  }
  .headline-medium {
    font-family: var(--md-sys-typescale-headline-medium-font-family-name);
    font-style: var(--md-sys-typescale-headline-medium-font-family-style);
    font-weight: var(--md-sys-typescale-headline-medium-font-weight);
    font-size: var(--md-sys-typescale-headline-medium-font-size);
    letter-spacing: var(--md-sys-typescale-headline-medium-tracking);
    line-height: var(--md-sys-typescale-headline-medium-height);
    text-transform: var(--md-sys-typescale-headline-medium-text-transform);
    text-decoration: var(--md-sys-typescale-headline-medium-text-decoration);
  }
  .headline-small {
    font-family: var(--md-sys-typescale-headline-small-font-family-name);
    font-style: var(--md-sys-typescale-headline-small-font-family-style);
    font-weight: var(--md-sys-typescale-headline-small-font-weight);
    font-size: var(--md-sys-typescale-headline-small-font-size);
    letter-spacing: var(--md-sys-typescale-headline-small-tracking);
    line-height: var(--md-sys-typescale-headline-small-height);
    text-transform: var(--md-sys-typescale-headline-small-text-transform);
    text-decoration: var(--md-sys-typescale-headline-small-text-decoration);
  }
  .body-large {
    font-family: var(--md-sys-typescale-body-large-font-family-name);
    font-style: var(--md-sys-typescale-body-large-font-family-style);
    font-weight: var(--md-sys-typescale-body-large-font-weight);
    font-size: var(--md-sys-typescale-body-large-font-size);
    letter-spacing: var(--md-sys-typescale-body-large-tracking);
    line-height: var(--md-sys-typescale-body-large-height);
    text-transform: var(--md-sys-typescale-body-large-text-transform);
    text-decoration: var(--md-sys-typescale-body-large-text-decoration);
  }
  .body-medium {
    font-family: var(--md-sys-typescale-body-medium-font-family-name);
    font-style: var(--md-sys-typescale-body-medium-font-family-style);
    font-weight: var(--md-sys-typescale-body-medium-font-weight);
    font-size: var(--md-sys-typescale-body-medium-font-size);
    letter-spacing: var(--md-sys-typescale-body-medium-tracking);
    line-height: var(--md-sys-typescale-body-medium-height);
    text-transform: var(--md-sys-typescale-body-medium-text-transform);
    text-decoration: var(--md-sys-typescale-body-medium-text-decoration);
  }
  .body-small {
    font-family: var(--md-sys-typescale-body-small-font-family-name);
    font-style: var(--md-sys-typescale-body-small-font-family-style);
    font-weight: var(--md-sys-typescale-body-small-font-weight);
    font-size: var(--md-sys-typescale-body-small-font-size);
    letter-spacing: var(--md-sys-typescale-body-small-tracking);
    line-height: var(--md-sys-typescale-body-small-height);
    text-transform: var(--md-sys-typescale-body-small-text-transform);
    text-decoration: var(--md-sys-typescale-body-small-text-decoration);
  }
  .label-large {
    font-family: var(--md-sys-typescale-label-large-font-family-name);
    font-style: var(--md-sys-typescale-label-large-font-family-style);
    font-weight: var(--md-sys-typescale-label-large-font-weight);
    font-size: var(--md-sys-typescale-label-large-font-size);
    letter-spacing: var(--md-sys-typescale-label-large-tracking);
    line-height: var(--md-sys-typescale-label-large-height);
    text-transform: var(--md-sys-typescale-label-large-text-transform);
    text-decoration: var(--md-sys-typescale-label-large-text-decoration);
  }
  .label-medium {
    font-family: var(--md-sys-typescale-label-medium-font-family-name);
    font-style: var(--md-sys-typescale-label-medium-font-family-style);
    font-weight: var(--md-sys-typescale-label-medium-font-weight);
    font-size: var(--md-sys-typescale-label-medium-font-size);
    letter-spacing: var(--md-sys-typescale-label-medium-tracking);
    line-height: var(--md-sys-typescale-label-medium-height);
    text-transform: var(--md-sys-typescale-label-medium-text-transform);
    text-decoration: var(--md-sys-typescale-label-medium-text-decoration);
  }
  .label-small {
    font-family: var(--md-sys-typescale-label-small-font-family-name);
    font-style: var(--md-sys-typescale-label-small-font-family-style);
    font-weight: var(--md-sys-typescale-label-small-font-weight);
    font-size: var(--md-sys-typescale-label-small-font-size);
    letter-spacing: var(--md-sys-typescale-label-small-tracking);
    line-height: var(--md-sys-typescale-label-small-height);
    text-transform: var(--md-sys-typescale-label-small-text-transform);
    text-decoration: var(--md-sys-typescale-label-small-text-decoration);
  }
  .title-large {
    font-family: var(--md-sys-typescale-title-large-font-family-name);
    font-style: var(--md-sys-typescale-title-large-font-family-style);
    font-weight: var(--md-sys-typescale-title-large-font-weight);
    font-size: var(--md-sys-typescale-title-large-font-size);
    letter-spacing: var(--md-sys-typescale-title-large-tracking);
    line-height: var(--md-sys-typescale-title-large-height);
    text-transform: var(--md-sys-typescale-title-large-text-transform);
    text-decoration: var(--md-sys-typescale-title-large-text-decoration);
  }
  .title-medium {
    font-family: var(--md-sys-typescale-title-medium-font-family-name);
    font-style: var(--md-sys-typescale-title-medium-font-family-style);
    font-weight: var(--md-sys-typescale-title-medium-font-weight);
    font-size: var(--md-sys-typescale-title-medium-font-size);
    letter-spacing: var(--md-sys-typescale-title-medium-tracking);
    line-height: var(--md-sys-typescale-title-medium-height);
    text-transform: var(--md-sys-typescale-title-medium-text-transform);
    text-decoration: var(--md-sys-typescale-title-medium-text-decoration);
  }
  .title-small {
    font-family: var(--md-sys-typescale-title-small-font-family-name);
    font-style: var(--md-sys-typescale-title-small-font-family-style);
    font-weight: var(--md-sys-typescale-title-small-font-weight);
    font-size: var(--md-sys-typescale-title-small-font-size);
    letter-spacing: var(--md-sys-typescale-title-small-tracking);
    line-height: var(--md-sys-typescale-title-small-height);
    text-transform: var(--md-sys-typescale-title-small-text-transform);
    text-decoration: var(--md-sys-typescale-title-small-text-decoration);
  }
`;
const colors = css`
  .text-primary {
    color: var(--primary-color) !important;
  }

  .text-secondary {
    color: var(--secondary-color) !important;
  }

  .text-neutral-50 {
    color: var(--neutral-50-color) !important;
  }

  .text-neutral-100 {
    color: var(--neutral-100-color) !important;
  }

  .text-neutral-200 {
    color: var(--neutral-200-color) !important;
  }

  .text-neutral-300 {
    color: var(--neutral-300-color) !important;
  }

  .text-neutral-400 {
    color: var(--neutral-400-color) !important;
  }

  .text-neutral-500 {
    color: var(--neutral-500-color) !important;
  }

  .text-neutral-600 {
    color: var(--neutral-600-color) !important;
  }

  .text-neutral-700 {
    color: var(--neutral-700-color) !important;
  }

  .text-success {
    color: var(--success) !important;
  }

  .text-warning {
    color: var(--warning) !important;
  }

  .text-danger {
    color: var(--danger) !important;
  }

  .text-red {
    color: var(--red) !important;
  }

  .text-white {
    color: var(--white) !important;
  }

  .text-dark {
    color: var(--dark) !important;
  }

  .bg-primary {
    background-color: var(--primary-color) !important;
  }

  .bg-secondary {
    background-color: var(--secondary-color) !important;
  }

  .bg-neutral-50 {
    background-color: var(--neutral-50-color) !important;
  }

  .bg-neutral-100 {
    background-color: var(--neutral-100-color) !important;
  }

  .bg-neutral-200 {
    background-color: var(--neutral-200-color) !important;
  }

  .bg-neutral-300 {
    background-color: var(--neutral-300-color) !important;
  }

  .bg-neutral-400 {
    background-color: var(--neutral-400-color) !important;
  }

  .bg-neutral-500 {
    background-color: var(--neutral-500-color) !important;
  }

  .bg-neutral-600 {
    background-color: var(--neutral-600-color) !important;
  }

  .bg-neutral-700 {
    background-color: var(--neutral-700-color) !important;
  }

  .bg-success {
    background-color: var(--success) !important;
  }

  .bg-warning {
    background-color: var(--warning) !important;
  }

  .bg-danger {
    background-color: var(--danger) !important;
  }

  .bg-red {
    background-color: var(--red) !important;
  }

  .bg-white {
    background-color: var(--white) !important;
  }

  .bg-dark {
    background-color: var(--dark) !important;
  }
`;
const spacing = css`
  .m-0 {
    margin: 0 !important;
  }

  .mt-0 {
    margin-top: 0 !important;
  }

  .mr-0 {
    margin-right: 0 !important;
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }

  .ml-0 {
    margin-left: 0 !important;
  }

  .my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .mx-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .m-1 {
    margin: 0.25rem !important;
  }

  .mt-1 {
    margin-top: 0.25rem !important;
  }

  .mr-1 {
    margin-right: 0.25rem !important;
  }

  .mb-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-1 {
    margin-left: 0.25rem !important;
  }

  .my-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .mx-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .m-2 {
    margin: 0.5rem !important;
  }

  .mt-2 {
    margin-top: 0.5rem !important;
  }

  .mr-2 {
    margin-right: 0.5rem !important;
  }

  .mb-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-2 {
    margin-left: 0.5rem !important;
  }

  .my-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .mx-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .m-3 {
    margin: 0.75rem !important;
  }

  .mt-3 {
    margin-top: 0.75rem !important;
  }

  .mr-3 {
    margin-right: 0.75rem !important;
  }

  .mb-3 {
    margin-bottom: 0.75rem !important;
  }

  .ml-3 {
    margin-left: 0.75rem !important;
  }

  .my-3 {
    margin-top: 0.75rem !important;
    margin-bottom: 0.75rem !important;
  }

  .mx-3 {
    margin-right: 0.75rem !important;
    margin-left: 0.75rem !important;
  }

  .m-4 {
    margin: 1rem !important;
  }

  .mt-4 {
    margin-top: 1rem !important;
  }

  .mr-4 {
    margin-right: 1rem !important;
  }

  .mb-4 {
    margin-bottom: 1rem !important;
  }

  .ml-4 {
    margin-left: 1rem !important;
  }

  .my-4 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .mx-4 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .m-5 {
    margin: 1.25rem !important;
  }

  .mt-5 {
    margin-top: 1.25rem !important;
  }

  .mr-5 {
    margin-right: 1.25rem !important;
  }

  .mb-5 {
    margin-bottom: 1.25rem !important;
  }

  .ml-5 {
    margin-left: 1.25rem !important;
  }

  .my-5 {
    margin-top: 1.25rem !important;
    margin-bottom: 1.25rem !important;
  }

  .mx-5 {
    margin-right: 1.25rem !important;
    margin-left: 1.25rem !important;
  }

  .m-6 {
    margin: 1.5rem !important;
  }

  .mt-6 {
    margin-top: 1.5rem !important;
  }

  .mr-6 {
    margin-right: 1.5rem !important;
  }

  .mb-6 {
    margin-bottom: 1.5rem !important;
  }

  .ml-6 {
    margin-left: 1.5rem !important;
  }

  .my-6 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .mx-6 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .m-7 {
    margin: 1.75rem !important;
  }

  .mt-7 {
    margin-top: 1.75rem !important;
  }

  .mr-7 {
    margin-right: 1.75rem !important;
  }

  .mb-7 {
    margin-bottom: 1.75rem !important;
  }

  .ml-7 {
    margin-left: 1.75rem !important;
  }

  .my-7 {
    margin-top: 1.75rem !important;
    margin-bottom: 1.75rem !important;
  }

  .mx-7 {
    margin-right: 1.75rem !important;
    margin-left: 1.75rem !important;
  }

  .m-8 {
    margin: 2rem !important;
  }

  .mt-8 {
    margin-top: 2rem !important;
  }

  .mr-8 {
    margin-right: 2rem !important;
  }

  .mb-8 {
    margin-bottom: 2rem !important;
  }

  .ml-8 {
    margin-left: 2rem !important;
  }

  .my-8 {
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
  }

  .mx-8 {
    margin-right: 2rem !important;
    margin-left: 2rem !important;
  }

  .m-9 {
    margin: 2.25rem !important;
  }

  .mt-9 {
    margin-top: 2.25rem !important;
  }

  .mr-9 {
    margin-right: 2.25rem !important;
  }

  .mb-9 {
    margin-bottom: 2.25rem !important;
  }

  .ml-9 {
    margin-left: 2.25rem !important;
  }

  .my-9 {
    margin-top: 2.25rem !important;
    margin-bottom: 2.25rem !important;
  }

  .mx-9 {
    margin-right: 2.25rem !important;
    margin-left: 2.25rem !important;
  }

  .m-10 {
    margin: 2.5rem !important;
  }

  .mt-10 {
    margin-top: 2.5rem !important;
  }

  .mr-10 {
    margin-right: 2.5rem !important;
  }

  .mb-10 {
    margin-bottom: 2.5rem !important;
  }

  .ml-10 {
    margin-left: 2.5rem !important;
  }

  .my-10 {
    margin-top: 2.5rem !important;
    margin-bottom: 2.5rem !important;
  }

  .mx-10 {
    margin-right: 2.5rem !important;
    margin-left: 2.5rem !important;
  }

  .m-11 {
    margin: 2.75rem !important;
  }

  .mt-11 {
    margin-top: 2.75rem !important;
  }

  .mr-11 {
    margin-right: 2.75rem !important;
  }

  .mb-11 {
    margin-bottom: 2.75rem !important;
  }

  .ml-11 {
    margin-left: 2.75rem !important;
  }

  .my-11 {
    margin-top: 2.75rem !important;
    margin-bottom: 2.75rem !important;
  }

  .mx-11 {
    margin-right: 2.75rem !important;
    margin-left: 2.75rem !important;
  }

  .m-12 {
    margin: 3rem !important;
  }

  .mt-12 {
    margin-top: 3rem !important;
  }

  .mr-12 {
    margin-right: 3rem !important;
  }

  .mb-12 {
    margin-bottom: 3rem !important;
  }

  .ml-12 {
    margin-left: 3rem !important;
  }

  .my-12 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .mx-12 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .m-25 {
    margin: 6.25rem !important;
  }

  .mt-25 {
    margin-top: 6.25rem !important;
  }

  .mr-25 {
    margin-right: 6.25rem !important;
  }

  .mb-25 {
    margin-bottom: 6.25rem !important;
  }

  .ml-25 {
    margin-left: 6.25rem !important;
  }

  .my-25 {
    margin-top: 6.25rem !important;
    margin-bottom: 6.25rem !important;
  }

  .mx-25 {
    margin-right: 6.25rem !important;
    margin-left: 6.25rem !important;
  }

  .p-0 {
    padding: 0 !important;
  }

  .pt-0 {
    padding-top: 0 !important;
  }

  .pr-0 {
    padding-right: 0 !important;
  }

  .pb-0 {
    padding-bottom: 0 !important;
  }

  .pl-0 {
    padding-left: 0 !important;
  }

  .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .px-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .p-1 {
    padding: 0.25rem !important;
  }

  .pt-1 {
    padding-top: 0.25rem !important;
  }

  .pr-1 {
    padding-right: 0.25rem !important;
  }

  .pb-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-1 {
    padding-left: 0.25rem !important;
  }

  .py-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .px-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .p-2 {
    padding: 0.5rem !important;
  }

  .pt-2 {
    padding-top: 0.5rem !important;
  }

  .pr-2 {
    padding-right: 0.5rem !important;
  }

  .pb-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-2 {
    padding-left: 0.5rem !important;
  }

  .py-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .px-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .p-3 {
    padding: 0.75rem !important;
  }

  .pt-3 {
    padding-top: 0.75rem !important;
  }

  .pr-3 {
    padding-right: 0.75rem !important;
  }

  .pb-3 {
    padding-bottom: 0.75rem !important;
  }

  .pl-3 {
    padding-left: 0.75rem !important;
  }

  .py-3 {
    padding-top: 0.75rem !important;
    padding-bottom: 0.75rem !important;
  }

  .px-3 {
    padding-right: 0.75rem !important;
    padding-left: 0.75rem !important;
  }

  .p-4 {
    padding: 1rem !important;
  }

  .pt-4 {
    padding-top: 1rem !important;
  }

  .pr-4 {
    padding-right: 1rem !important;
  }

  .pb-4 {
    padding-bottom: 1rem !important;
  }

  .pl-4 {
    padding-left: 1rem !important;
  }

  .py-4 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .px-4 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .p-5 {
    padding: 1.25rem !important;
  }

  .pt-5 {
    padding-top: 1.25rem !important;
  }

  .pr-5 {
    padding-right: 1.25rem !important;
  }

  .pb-5 {
    padding-bottom: 1.25rem !important;
  }

  .pl-5 {
    padding-left: 1.25rem !important;
  }

  .py-5 {
    padding-top: 1.25rem !important;
    padding-bottom: 1.25rem !important;
  }

  .px-5 {
    padding-right: 1.25rem !important;
    padding-left: 1.25rem !important;
  }

  .p-6 {
    padding: 1.5rem !important;
  }

  .pt-6 {
    padding-top: 1.5rem !important;
  }

  .pr-6 {
    padding-right: 1.5rem !important;
  }

  .pb-6 {
    padding-bottom: 1.5rem !important;
  }

  .pl-6 {
    padding-left: 1.5rem !important;
  }

  .py-6 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .px-6 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .p-7 {
    padding: 1.75rem !important;
  }

  .pt-7 {
    padding-top: 1.75rem !important;
  }

  .pr-7 {
    padding-right: 1.75rem !important;
  }

  .pb-7 {
    padding-bottom: 1.75rem !important;
  }

  .pl-7 {
    padding-left: 1.75rem !important;
  }

  .py-7 {
    padding-top: 1.75rem !important;
    padding-bottom: 1.75rem !important;
  }

  .px-7 {
    padding-right: 1.75rem !important;
    padding-left: 1.75rem !important;
  }

  .p-8 {
    padding: 2rem !important;
  }

  .pt-8 {
    padding-top: 2rem !important;
  }

  .pr-8 {
    padding-right: 2rem !important;
  }

  .pb-8 {
    padding-bottom: 2rem !important;
  }

  .pl-8 {
    padding-left: 2rem !important;
  }

  .py-8 {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }

  .px-8 {
    padding-right: 2rem !important;
    padding-left: 2rem !important;
  }

  .p-9 {
    padding: 2.25rem !important;
  }

  .pt-9 {
    padding-top: 2.25rem !important;
  }

  .pr-9 {
    padding-right: 2.25rem !important;
  }

  .pb-9 {
    padding-bottom: 2.25rem !important;
  }

  .pl-9 {
    padding-left: 2.25rem !important;
  }

  .py-9 {
    padding-top: 2.25rem !important;
    padding-bottom: 2.25rem !important;
  }

  .px-9 {
    padding-right: 2.25rem !important;
    padding-left: 2.25rem !important;
  }

  .p-10 {
    padding: 2.5rem !important;
  }

  .pt-10 {
    padding-top: 2.5rem !important;
  }

  .pr-10 {
    padding-right: 2.5rem !important;
  }

  .pb-10 {
    padding-bottom: 2.5rem !important;
  }

  .pl-10 {
    padding-left: 2.5rem !important;
  }

  .py-10 {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important;
  }

  .px-10 {
    padding-right: 2.5rem !important;
    padding-left: 2.5rem !important;
  }

  .p-11 {
    padding: 2.75rem !important;
  }

  .pt-11 {
    padding-top: 2.75rem !important;
  }

  .pr-11 {
    padding-right: 2.75rem !important;
  }

  .pb-11 {
    padding-bottom: 2.75rem !important;
  }

  .pl-11 {
    padding-left: 2.75rem !important;
  }

  .py-11 {
    padding-top: 2.75rem !important;
    padding-bottom: 2.75rem !important;
  }

  .px-11 {
    padding-right: 2.75rem !important;
    padding-left: 2.75rem !important;
  }

  .p-12 {
    padding: 3rem !important;
  }

  .pt-12 {
    padding-top: 3rem !important;
  }

  .pr-12 {
    padding-right: 3rem !important;
  }

  .pb-12 {
    padding-bottom: 3rem !important;
  }

  .pl-12 {
    padding-left: 3rem !important;
  }

  .py-12 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .px-12 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .p-25 {
    padding: 6.25rem !important;
  }

  .pt-25 {
    padding-top: 6.25rem !important;
  }

  .pr-25 {
    padding-right: 6.25rem !important;
  }

  .pb-25 {
    padding-bottom: 6.25rem !important;
  }

  .pl-25 {
    padding-left: 6.25rem !important;
  }

  .py-25 {
    padding-top: 6.25rem !important;
    padding-bottom: 6.25rem !important;
  }

  .px-25 {
    padding-right: 6.25rem !important;
    padding-left: 6.25rem !important;
  }

  @media screen and (max-width: 767px) {
    .m-0-mobile {
      margin: 0 !important;
    }

    .mt-0-mobile {
      margin-top: 0 !important;
    }

    .mr-0-mobile {
      margin-right: 0 !important;
    }

    .mb-0-mobile {
      margin-bottom: 0 !important;
    }

    .ml-0-mobile {
      margin-left: 0 !important;
    }

    .my-0-mobile {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
    }

    .mx-0-mobile {
      margin-right: 0 !important;
      margin-left: 0 !important;
    }

    .m-1-mobile {
      margin: 0.25rem !important;
    }

    .mt-1-mobile {
      margin-top: 0.25rem !important;
    }

    .mr-1-mobile {
      margin-right: 0.25rem !important;
    }

    .mb-1-mobile {
      margin-bottom: 0.25rem !important;
    }

    .ml-1-mobile {
      margin-left: 0.25rem !important;
    }

    .my-1-mobile {
      margin-top: 0.25rem !important;
      margin-bottom: 0.25rem !important;
    }

    .mx-1-mobile {
      margin-right: 0.25rem !important;
      margin-left: 0.25rem !important;
    }

    .m-2-mobile {
      margin: 0.5rem !important;
    }

    .mt-2-mobile {
      margin-top: 0.5rem !important;
    }

    .mr-2-mobile {
      margin-right: 0.5rem !important;
    }

    .mb-2-mobile {
      margin-bottom: 0.5rem !important;
    }

    .ml-2-mobile {
      margin-left: 0.5rem !important;
    }

    .my-2-mobile {
      margin-top: 0.5rem !important;
      margin-bottom: 0.5rem !important;
    }

    .mx-2-mobile {
      margin-right: 0.5rem !important;
      margin-left: 0.5rem !important;
    }

    .m-3-mobile {
      margin: 0.75rem !important;
    }

    .mt-3-mobile {
      margin-top: 0.75rem !important;
    }

    .mr-3-mobile {
      margin-right: 0.75rem !important;
    }

    .mb-3-mobile {
      margin-bottom: 0.75rem !important;
    }

    .ml-3-mobile {
      margin-left: 0.75rem !important;
    }

    .my-3-mobile {
      margin-top: 0.75rem !important;
      margin-bottom: 0.75rem !important;
    }

    .mx-3-mobile {
      margin-right: 0.75rem !important;
      margin-left: 0.75rem !important;
    }

    .m-4-mobile {
      margin: 1rem !important;
    }

    .mt-4-mobile {
      margin-top: 1rem !important;
    }

    .mr-4-mobile {
      margin-right: 1rem !important;
    }

    .mb-4-mobile {
      margin-bottom: 1rem !important;
    }

    .ml-4-mobile {
      margin-left: 1rem !important;
    }

    .my-4-mobile {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
    }

    .mx-4-mobile {
      margin-right: 1rem !important;
      margin-left: 1rem !important;
    }

    .m-5-mobile {
      margin: 1.25rem !important;
    }

    .mt-5-mobile {
      margin-top: 1.25rem !important;
    }

    .mr-5-mobile {
      margin-right: 1.25rem !important;
    }

    .mb-5-mobile {
      margin-bottom: 1.25rem !important;
    }

    .ml-5-mobile {
      margin-left: 1.25rem !important;
    }

    .my-5-mobile {
      margin-top: 1.25rem !important;
      margin-bottom: 1.25rem !important;
    }

    .mx-5-mobile {
      margin-right: 1.25rem !important;
      margin-left: 1.25rem !important;
    }

    .m-6-mobile {
      margin: 1.5rem !important;
    }

    .mt-6-mobile {
      margin-top: 1.5rem !important;
    }

    .mr-6-mobile {
      margin-right: 1.5rem !important;
    }

    .mb-6-mobile {
      margin-bottom: 1.5rem !important;
    }

    .ml-6-mobile {
      margin-left: 1.5rem !important;
    }

    .my-6-mobile {
      margin-top: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }

    .mx-6-mobile {
      margin-right: 1.5rem !important;
      margin-left: 1.5rem !important;
    }

    .m-7-mobile {
      margin: 1.75rem !important;
    }

    .mt-7-mobile {
      margin-top: 1.75rem !important;
    }

    .mr-7-mobile {
      margin-right: 1.75rem !important;
    }

    .mb-7-mobile {
      margin-bottom: 1.75rem !important;
    }

    .ml-7-mobile {
      margin-left: 1.75rem !important;
    }

    .my-7-mobile {
      margin-top: 1.75rem !important;
      margin-bottom: 1.75rem !important;
    }

    .mx-7-mobile {
      margin-right: 1.75rem !important;
      margin-left: 1.75rem !important;
    }

    .m-8-mobile {
      margin: 2rem !important;
    }

    .mt-8-mobile {
      margin-top: 2rem !important;
    }

    .mr-8-mobile {
      margin-right: 2rem !important;
    }

    .mb-8-mobile {
      margin-bottom: 2rem !important;
    }

    .ml-8-mobile {
      margin-left: 2rem !important;
    }

    .my-8-mobile {
      margin-top: 2rem !important;
      margin-bottom: 2rem !important;
    }

    .mx-8-mobile {
      margin-right: 2rem !important;
      margin-left: 2rem !important;
    }

    .m-9-mobile {
      margin: 2.25rem !important;
    }

    .mt-9-mobile {
      margin-top: 2.25rem !important;
    }

    .mr-9-mobile {
      margin-right: 2.25rem !important;
    }

    .mb-9-mobile {
      margin-bottom: 2.25rem !important;
    }

    .ml-9-mobile {
      margin-left: 2.25rem !important;
    }

    .my-9-mobile {
      margin-top: 2.25rem !important;
      margin-bottom: 2.25rem !important;
    }

    .mx-9-mobile {
      margin-right: 2.25rem !important;
      margin-left: 2.25rem !important;
    }

    .m-10-mobile {
      margin: 2.5rem !important;
    }

    .mt-10-mobile {
      margin-top: 2.5rem !important;
    }

    .mr-10-mobile {
      margin-right: 2.5rem !important;
    }

    .mb-10-mobile {
      margin-bottom: 2.5rem !important;
    }

    .ml-10-mobile {
      margin-left: 2.5rem !important;
    }

    .my-10-mobile {
      margin-top: 2.5rem !important;
      margin-bottom: 2.5rem !important;
    }

    .mx-10-mobile {
      margin-right: 2.5rem !important;
      margin-left: 2.5rem !important;
    }

    .m-11-mobile {
      margin: 2.75rem !important;
    }

    .mt-11-mobile {
      margin-top: 2.75rem !important;
    }

    .mr-11-mobile {
      margin-right: 2.75rem !important;
    }

    .mb-11-mobile {
      margin-bottom: 2.75rem !important;
    }

    .ml-11-mobile {
      margin-left: 2.75rem !important;
    }

    .my-11-mobile {
      margin-top: 2.75rem !important;
      margin-bottom: 2.75rem !important;
    }

    .mx-11-mobile {
      margin-right: 2.75rem !important;
      margin-left: 2.75rem !important;
    }

    .m-12-mobile {
      margin: 3rem !important;
    }

    .mt-12-mobile {
      margin-top: 3rem !important;
    }

    .mr-12-mobile {
      margin-right: 3rem !important;
    }

    .mb-12-mobile {
      margin-bottom: 3rem !important;
    }

    .ml-12-mobile {
      margin-left: 3rem !important;
    }

    .my-12-mobile {
      margin-top: 3rem !important;
      margin-bottom: 3rem !important;
    }

    .mx-12-mobile {
      margin-right: 3rem !important;
      margin-left: 3rem !important;
    }

    .m-25-mobile {
      margin: 6.25rem !important;
    }

    .mt-25-mobile {
      margin-top: 6.25rem !important;
    }

    .mr-25-mobile {
      margin-right: 6.25rem !important;
    }

    .mb-25-mobile {
      margin-bottom: 6.25rem !important;
    }

    .ml-25-mobile {
      margin-left: 6.25rem !important;
    }

    .my-25-mobile {
      margin-top: 6.25rem !important;
      margin-bottom: 6.25rem !important;
    }

    .mx-25-mobile {
      margin-right: 6.25rem !important;
      margin-left: 6.25rem !important;
    }

    .p-0-mobile {
      padding: 0 !important;
    }

    .pt-0-mobile {
      padding-top: 0 !important;
    }

    .pr-0-mobile {
      padding-right: 0 !important;
    }

    .pb-0-mobile {
      padding-bottom: 0 !important;
    }

    .pl-0-mobile {
      padding-left: 0 !important;
    }

    .py-0-mobile {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }

    .px-0-mobile {
      padding-right: 0 !important;
      padding-left: 0 !important;
    }

    .p-1-mobile {
      padding: 0.25rem !important;
    }

    .pt-1-mobile {
      padding-top: 0.25rem !important;
    }

    .pr-1-mobile {
      padding-right: 0.25rem !important;
    }

    .pb-1-mobile {
      padding-bottom: 0.25rem !important;
    }

    .pl-1-mobile {
      padding-left: 0.25rem !important;
    }

    .py-1-mobile {
      padding-top: 0.25rem !important;
      padding-bottom: 0.25rem !important;
    }

    .px-1-mobile {
      padding-right: 0.25rem !important;
      padding-left: 0.25rem !important;
    }

    .p-2-mobile {
      padding: 0.5rem !important;
    }

    .pt-2-mobile {
      padding-top: 0.5rem !important;
    }

    .pr-2-mobile {
      padding-right: 0.5rem !important;
    }

    .pb-2-mobile {
      padding-bottom: 0.5rem !important;
    }

    .pl-2-mobile {
      padding-left: 0.5rem !important;
    }

    .py-2-mobile {
      padding-top: 0.5rem !important;
      padding-bottom: 0.5rem !important;
    }

    .px-2-mobile {
      padding-right: 0.5rem !important;
      padding-left: 0.5rem !important;
    }

    .p-3-mobile {
      padding: 0.75rem !important;
    }

    .pt-3-mobile {
      padding-top: 0.75rem !important;
    }

    .pr-3-mobile {
      padding-right: 0.75rem !important;
    }

    .pb-3-mobile {
      padding-bottom: 0.75rem !important;
    }

    .pl-3-mobile {
      padding-left: 0.75rem !important;
    }

    .py-3-mobile {
      padding-top: 0.75rem !important;
      padding-bottom: 0.75rem !important;
    }

    .px-3-mobile {
      padding-right: 0.75rem !important;
      padding-left: 0.75rem !important;
    }

    .p-4-mobile {
      padding: 1rem !important;
    }

    .pt-4-mobile {
      padding-top: 1rem !important;
    }

    .pr-4-mobile {
      padding-right: 1rem !important;
    }

    .pb-4-mobile {
      padding-bottom: 1rem !important;
    }

    .pl-4-mobile {
      padding-left: 1rem !important;
    }

    .py-4-mobile {
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
    }

    .px-4-mobile {
      padding-right: 1rem !important;
      padding-left: 1rem !important;
    }

    .p-5-mobile {
      padding: 1.25rem !important;
    }

    .pt-5-mobile {
      padding-top: 1.25rem !important;
    }

    .pr-5-mobile {
      padding-right: 1.25rem !important;
    }

    .pb-5-mobile {
      padding-bottom: 1.25rem !important;
    }

    .pl-5-mobile {
      padding-left: 1.25rem !important;
    }

    .py-5-mobile {
      padding-top: 1.25rem !important;
      padding-bottom: 1.25rem !important;
    }

    .px-5-mobile {
      padding-right: 1.25rem !important;
      padding-left: 1.25rem !important;
    }

    .p-6-mobile {
      padding: 1.5rem !important;
    }

    .pt-6-mobile {
      padding-top: 1.5rem !important;
    }

    .pr-6-mobile {
      padding-right: 1.5rem !important;
    }

    .pb-6-mobile {
      padding-bottom: 1.5rem !important;
    }

    .pl-6-mobile {
      padding-left: 1.5rem !important;
    }

    .py-6-mobile {
      padding-top: 1.5rem !important;
      padding-bottom: 1.5rem !important;
    }

    .px-6-mobile {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }

    .p-7-mobile {
      padding: 1.75rem !important;
    }

    .pt-7-mobile {
      padding-top: 1.75rem !important;
    }

    .pr-7-mobile {
      padding-right: 1.75rem !important;
    }

    .pb-7-mobile {
      padding-bottom: 1.75rem !important;
    }

    .pl-7-mobile {
      padding-left: 1.75rem !important;
    }

    .py-7-mobile {
      padding-top: 1.75rem !important;
      padding-bottom: 1.75rem !important;
    }

    .px-7-mobile {
      padding-right: 1.75rem !important;
      padding-left: 1.75rem !important;
    }

    .p-8-mobile {
      padding: 2rem !important;
    }

    .pt-8-mobile {
      padding-top: 2rem !important;
    }

    .pr-8-mobile {
      padding-right: 2rem !important;
    }

    .pb-8-mobile {
      padding-bottom: 2rem !important;
    }

    .pl-8-mobile {
      padding-left: 2rem !important;
    }

    .py-8-mobile {
      padding-top: 2rem !important;
      padding-bottom: 2rem !important;
    }

    .px-8-mobile {
      padding-right: 2rem !important;
      padding-left: 2rem !important;
    }

    .p-9-mobile {
      padding: 2.25rem !important;
    }

    .pt-9-mobile {
      padding-top: 2.25rem !important;
    }

    .pr-9-mobile {
      padding-right: 2.25rem !important;
    }

    .pb-9-mobile {
      padding-bottom: 2.25rem !important;
    }

    .pl-9-mobile {
      padding-left: 2.25rem !important;
    }

    .py-9-mobile {
      padding-top: 2.25rem !important;
      padding-bottom: 2.25rem !important;
    }

    .px-9-mobile {
      padding-right: 2.25rem !important;
      padding-left: 2.25rem !important;
    }

    .p-10-mobile {
      padding: 2.5rem !important;
    }

    .pt-10-mobile {
      padding-top: 2.5rem !important;
    }

    .pr-10-mobile {
      padding-right: 2.5rem !important;
    }

    .pb-10-mobile {
      padding-bottom: 2.5rem !important;
    }

    .pl-10-mobile {
      padding-left: 2.5rem !important;
    }

    .py-10-mobile {
      padding-top: 2.5rem !important;
      padding-bottom: 2.5rem !important;
    }

    .px-10-mobile {
      padding-right: 2.5rem !important;
      padding-left: 2.5rem !important;
    }

    .p-11-mobile {
      padding: 2.75rem !important;
    }

    .pt-11-mobile {
      padding-top: 2.75rem !important;
    }

    .pr-11-mobile {
      padding-right: 2.75rem !important;
    }

    .pb-11-mobile {
      padding-bottom: 2.75rem !important;
    }

    .pl-11-mobile {
      padding-left: 2.75rem !important;
    }

    .py-11-mobile {
      padding-top: 2.75rem !important;
      padding-bottom: 2.75rem !important;
    }

    .px-11-mobile {
      padding-right: 2.75rem !important;
      padding-left: 2.75rem !important;
    }

    .p-12-mobile {
      padding: 3rem !important;
    }

    .pt-12-mobile {
      padding-top: 3rem !important;
    }

    .pr-12-mobile {
      padding-right: 3rem !important;
    }

    .pb-12-mobile {
      padding-bottom: 3rem !important;
    }

    .pl-12-mobile {
      padding-left: 3rem !important;
    }

    .py-12-mobile {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }

    .px-12-mobile {
      padding-right: 3rem !important;
      padding-left: 3rem !important;
    }

    .p-25-mobile {
      padding: 6.25rem !important;
    }

    .pt-25-mobile {
      padding-top: 6.25rem !important;
    }

    .pr-25-mobile {
      padding-right: 6.25rem !important;
    }

    .pb-25-mobile {
      padding-bottom: 6.25rem !important;
    }

    .pl-25-mobile {
      padding-left: 6.25rem !important;
    }

    .py-25-mobile {
      padding-top: 6.25rem !important;
      padding-bottom: 6.25rem !important;
    }

    .px-25-mobile {
      padding-right: 6.25rem !important;
      padding-left: 6.25rem !important;
    }
  }

  /*# sourceMappingURL=styles.css.map */
`;
const texts = css`
  /* Texts */
  .text-xs {
    font-size: 0.75rem; /* 12px */
    line-height: 1rem; /* 16px */
  }
  .text-sm {
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
  }
  .text-base {
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
  }
  .text-lg {
    font-size: 1.125rem; /* 18px */
    line-height: 1.75rem; /* 28px */
  }
  .text-xl {
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
  }
  .text-2xl {
    font-size: 1.5rem; /* 24px */
    line-height: 2rem; /* 32px */
  }
  .text-3xl {
    font-size: 1.875rem; /* 30px */
    line-height: 2.25rem; /* 36px */
  }
  .text-4xl {
    font-size: 2.25rem; /* 36px */
    line-height: 2.5rem; /* 40px */
  }
  .text-5xl {
    font-size: 3rem; /* 48px */
    line-height: 1;
  }
  /* Text end */
  .text-center {
    text-align: center;
  }
  .text-justify {
    text-align: justify;
  }
  .text-small {
    /* font-size: 90%; */
    font-size: smaller;
  }
  .text-muted {
    font-weight: 200;
  }
`;
const widthAndHeight = css`
  .w-0 {
    width: 0 !important;
  }

  .w-1 {
    width: 0.25rem !important;
  }

  .w-2 {
    width: 0.5rem !important;
  }

  .w-3 {
    width: 0.75rem !important;
  }

  .w-4 {
    width: 1rem !important;
  }

  .w-5 {
    width: 1.25rem !important;
  }

  .w-6 {
    width: 1.5rem !important;
  }

  .w-7 {
    width: 1.75rem !important;
  }

  .w-8 {
    width: 2rem !important;
  }

  .w-9 {
    width: 2.25rem !important;
  }

  .w-10 {
    width: 2.5rem !important;
  }

  .w-11 {
    width: 2.75rem !important;
  }

  .w-12 {
    width: 3rem !important;
  }

  .w-25 {
    width: 6.25rem !important;
  }

  .h-0 {
    height: 0 !important;
  }

  .h-1 {
    height: 0.25rem !important;
  }

  .h-2 {
    height: 0.5rem !important;
  }

  .h-3 {
    height: 0.75rem !important;
  }

  .h-4 {
    height: 1rem !important;
  }

  .h-5 {
    height: 1.25rem !important;
  }

  .h-6 {
    height: 1.5rem !important;
  }

  .h-7 {
    height: 1.75rem !important;
  }

  .h-8 {
    height: 2rem !important;
  }

  .h-9 {
    height: 2.25rem !important;
  }

  .h-10 {
    height: 2.5rem !important;
  }

  .h-11 {
    height: 2.75rem !important;
  }

  .h-12 {
    height: 3rem !important;
  }

  .h-25 {
    height: 6.25rem !important;
  }

  .w-100 {
    width: 100%;
  }

  .h-100 {
    height: 100%;
  }

  .w-inherit {
    width: inherit;
  }

  .w-60 {
    width: 60%;
  }
`;
const fontWeights = css`
  .font-bold {
    font-weight: 700;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-black {
    font-weight: 900;
  }
  .font-semibold {
    font-weight: 600;
  }
`;
const gaps = css`
  .gap-x-4 {
    column-gap: 1rem;
  }
  .gap-8 {
    gap: 2rem;
  }
  .gap-7 {
    gap: 1.75rem;
  }
  .gap-6 {
    gap: 1.5rem;
  }
  .gap-5 {
    gap: 1.25rem;
  }
  .gap-4 {
    gap: 1rem;
  }
  .gap-3 {
    gap: 0.75rem;
  }
  .gap-2 {
    gap: 0.5rem;
  }
  .gap-1 {
    gap: 0.25rem;
  }
  .gap-0 {
    gap: 0;
  }
`;
const flex = css`
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flex-start {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .flex-end {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .flex {
    display: flex;
  }
  .flex-1 {
    flex: 1;
  }
  .flexw {
    display: flex;
    flex-wrap: wrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-no-wrap {
    flex-wrap: nowrap;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-col {
    flex-direction: column;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .no-wrap {
    flex-wrap: nowrap !important;
  }
  .wrap {
    flex-wrap: wrap;
  }
  .items-center {
    align-items: center;
  }
`;
const grid = css`
  .grid {
    display: grid;
  }
  .grid-2-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const borderRadius = css`
  .rounded-2xl {
    border-radius: 1rem; /* 16px */
  }
  .rounded-50 {
    border-radius: 50%;
  }
  .rounded-2 {
    border-radius: 0.5rem;
  }
  .rounded-md {
    border-radius: 0.375rem;
  }
  .rounded-t-none {
    border-top-right-radius: 0 !important;
    border-top-left-radius: 0 !important;
  }
`;
const border = css`
  .border-2 {
    border-width: 2px;
  }
`;
const opacity = css`
  .opacity-10 {
    opacity: 0.1;
  }
`;
const utils = css`
  .adaptibe-two-col {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1rem;
    justify-content: center;
  }
  .grid-4 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .adaptive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;
const positions = css`
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
  }
`;
const overflow = css`
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
`;
const shadow = css`
  .shadow-md {
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
      0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
`;
const materialResetter = css`
  md-outlined-text-field {
    --md-outlined-text-field-error-hover-outline-color: var(
      --md-sys-color-error
    );
    --md-outlined-field-error-hover-label-text-color: var(--md-sys-color-error);
    --md-outlined-field-supporting-text-type: 12px "Roboto Flex";
    --md-outlined-field-supporting-text-leading-space: 0px;
    --md-outlined-field-supporting-text-color: var(--md-sys-color-on-surface);
  }
  md-outlined-select {
    --md-sys-color-on-surface-variant: var(--md-sys-color-outline);
    --md-sys-color-surface-container: var(--md-sys-color-surface);
    --md-menu-item-list-item-selected-container-color: var(
      --md-sys-color-surface-variant
    );
    --md-outlined-field-supporting-text-leading-space: 0px;
    --md-outlined-field-supporting-text-type: 12px "Roboto Flex";
    --md-outlined-field-supporting-text-color: var(--md-sys-color-on-surface);
  }
  md-icon:not(:defined) {
    visibility: hidden;
  }
`;
const structure = css`
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px 10px;
  }

  .mobile {
    display: none;
  }

  @media screen and (max-width: 767px) {
    .mobile {
      display: unset;
    }

    .desktop {
      display: none;
    }

    .flexr {
      /* for flex reponsive */
      flex-direction: column;
    }
  }

  @media screen and (min-width: 768px) {
    .mobile {
      display: none;
    }

    .desktop {
      display: unset;
    }

    .flexr {
      /* for flex reponsive */
      flex-direction: row !important;
    }
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
  @media screen and (min-width: 768px) {
    .column {
      flex: 1;
    }
  }
`;
const components = css`
  .badge {
    padding: 0.25rem;
    border-radius: 0.375rem;
    font-size: 0.5rem;
    text-transform: capitalize;
  }
  .spinner {
    margin: auto;
    border: calc(var(--spinner-size, 150px) / 7.5) solid #eaf0f6;
    border-radius: 50%;
    border-top: calc(var(--spinner-size, 150px) / 7.5) solid #d12751;
    width: var(--spinner-size, 150px);
    height: var(--spinner-size, 150px);
    animation: spinner 4s linear infinite;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* ------------- Lazy Loading ------------------- */
  .blurred-img {
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .blurred-img::before {
    content: "";
    position: absolute;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    inset: 0;
    opacity: 0;
    animation: pulse 2.5s infinite;
    background-color: var(--text-color);
  }
  @keyframes pulse {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 0;
    }
  }
  .blurred-img.loaded::before {
    animation: none;
    content: none;
  }
  .blurred-img img {
    opacity: 0;
    transition: opacity 250ms ease-in-out;
  }
  .blurred-img.loaded img {
    opacity: 1;
  }
  /* ----------------- Lazy Loading end ------------------- */

  /* Gray image */
  .image-gray-out {
    filter: grayscale(1);
  }
  .image-filter-invert {
    filter: invert(1);
  }

  /* Badge */
  .badge-info {
    color: #fff;
    background: rgb(58 191 248);
  }

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /* Surface */
  .surface {
    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface);
    padding: 60px;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    .surface {
      padding: 20px;
    }
  }
`;
const headings = css`
  .h1 {
    font-family: var(--nuqtah-font-family, Roboto Flex);
    font-weight: 500;
    font-size: 2.5rem; /* 40px */
    line-height: 1.2;
  }
  .h2 {
    font-family: var(--nuqtah-font-family, Roboto Flex);
    font-weight: 500;
    font-size: 2rem; /* 32px */
    line-height: 1.2;
  }
  .h3 {
    font-family: var(--nuqtah-font-family, Roboto Flex);
    font-weight: 500;
    font-size: 1.75rem; /* 28px */
    line-height: 1.2;
  }
  .h4 {
    font-family: var(--nuqtah-font-family, Roboto Flex);
    font-weight: 500;
    font-size: 1.5rem; /* 24px */
    line-height: 1.2;
  }
  .h5 {
    font-family: var(--nuqtah-font-family, Roboto Flex);
    font-weight: 500;
    font-size: 1.25rem; /* 20px */
    line-height: 1.2;
  }
  .h6 {
    font-family: var(--nuqtah-font-family, Roboto Flex);
    font-weight: 500;
    font-size: 1rem; /* 16px */
    line-height: 1.2;
  }
`;

export const sharedStyles = css`
  ${resets}
  ${structure}
  ${texts}
  ${typography}
  ${colors}
  ${spacing}  
  ${widthAndHeight}
  ${fontWeights}
  ${gaps}
  ${flex}
  ${grid}
  ${borderRadius}
  ${border}
  ${opacity}
  ${utils}  
  ${overflow}
  ${positions}  
  ${shadow}
  ${materialResetter}
  ${components}
  ${headings}

  .d-block {
    display: block;
  }
  .d-none {
    display: none !important;
  }
  .cursor {
    cursor: pointer;
  }
  .outline {
    outline: 0.5px solid #ddd;
  }
`;
export const nftStyles = css`
  .nft-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 8px;
    row-gap: 24px;
  }
  @media (min-width: 1024px) {
    .nft-list {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .nft-list {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
`;
export const tableStyles = css`
  /* Table css */
  .app-table {
    border-spacing: 0px;
    width: 100%;
    --self-border-color: #eff2f5;
    --self-background-color-even: var(--background-color-2);
    --self-background-color-odd: var(--background-color-1);
    background-color: var(--background-color-1);
  }
  .app-table td {
    width: 200px;
    padding: 8px;
    box-sizing: border-box;
    text-align: center;
    white-space: break-word;
    vertical-align: middle;
  }
  .app-table th {
    width: 100px;
    padding: 8px;
    box-sizing: border-box;
    text-align: center;
    white-space: break-word;
  }
  .app-table th {
    margin-bottom: 24px;
    border-bottom: 1px solid var(--self-border-color);
  }
  .app-table tr:first-child td {
    border-top: 24px solid transparent;
  }
  .app-table tr td {
    background-color: var(--self-background-color-even);
    --visibility-color: var(--self-background-color-odd);
  }
  .app-table tr:nth-child(even) td {
    background-color: var(--self-background-color-odd);
    --visibility-color: var(--self-background-color-even);
  }
`;
