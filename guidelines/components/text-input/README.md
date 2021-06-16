# Text-input

Text inputs are input fields typically used in forms that allow the user to enter text data in a structured format.

## Usage

Use text inputs in forms to help people enter, select, and search for text. Common text input types include: Usernames, descriptions, URLs, phone numbers, credit cards, emails, addresses or plain text searches

### Do's

* Do use fixed width inputs for content that has a specific, known length (e.g. post code, phone number).
* Do use sentence for any input text case with standard, local grammar and punctuation rules.
* Do use helpful and clear text for labels, error messages and helper texts


### Dont's

* Do not use text-input for text longer than a single line (e.g. name, phone number). Use the text-area instead.
* Do not disable copy and paste.
* Do not display pop up error message after validating
* Avoid masking label, keep it always visible.

## Variants

* Text-input
* Text-area

![Text-input vartiants](images/input_variants.png)

_Text-input vartiants_

## States

Text-input states: **enabled**, **hover**, **focus**, **error** and **disabled**.

![Example of the text-input component states](images/input_states.png)

_Example of the text-input component states_



## Anatomy

![Text-input anatomy](images/input_actions_clear.png)

_Text-input anatomy_

## Content

### Actions

#### Clearing content

![Example of a text-input with a clear content action button](images/input_actions_clear.png)

_Example of a text-input with a clear content action button_

#### Show or hide content

![Example of a text-input with a show/hide password button](images/input_actions_password.png)

_Example of a text-input with a show/hide password button_

### Prefixes and suffixes

![Icon or text prefixes and suffixes usage](images/input_actions_password.png)

_Icon or text prefixes and suffixes usage_

## Design Specifications

### Width

width | value
-- | --
```small``` | 60px
```medium``` (_default_) | 240px
```large``` | 480px
```fitContent``` | -
```fillParent``` | -


### Margin

margin | value
-- | --
```xxsmall``` | 6px
```xsmall``` | 16px
```small``` | 24px
```medium``` | 36px
```large``` | 48px
```xlarge``` | 64px
```xxlarge``` | 100px

And also apply different values to each side of the component:
```top``` ```bottom``` ```left``` ```right```

## Color

| Property        | Element          | Token             | Value           |
| --------------- | ---------------- | ----------------- | --------------- |
| `color`         | error message    | `Hal-Red-S-41`    | #d0011b         |
| `color`         | label            | `Hal-Black`       | #000000         |
| `color`         | placeholder      | `Hal-Grey-S-40`   | #666666         |
| `color`         | outline:enabled  | `Hal-Black`       | #000000         |
| `color`         | outline:hover    | `Hal-Purple-L-60` | #ab63cf         |
| `color`         | outline:focus    | `Hal-Purple-L-60` | #ab63cf         |
| `color`         | outline:error    | `Hal-Red-S-41`    | #d0011b         |
| `color`         | outline:disabled | `Hal-Red-L-60`    | #999999         |


### Typography

| Property        | Element        | Token             | Value           |
| --------------- | -------------- | ----------------- | --------------- |
| `font-size`     | error message  | `type-scale-01`   | 12px            |
| `font-size`     | label          | `type-scale-02`   | 14px            |
| `font-size`     | placeholder    | `type-scale-03`   | 16px            |
| `font-family`   | error message  | `type-sans`       | Open Sans       |
| `font-family`   | label          | `type-sans`       | Open Sans       |
| `font-family`   | placeholder    | `type-sans`       | Open Sans       |
| `font-weight`   | error message  | `type-regular`    | 400             |
| `font-weight`   | label          | `type-bold`       | 600             |
| `font-weight`   | placeholder    | `type-regular`    | 400             |


### Spacing

| Property                                       |     Value |
| ---------------------------------------------- | --------- |
| Input value `padding-top`                      |      6px  |
| Input value `padding-bottom`                   |      7px |
| Distance between preffix and value             |     12px |
| Distance between suffix and value              |     12px |

### Other

| Property                                       |       Value |
| ---------------------------------------------- | ----------: |
| Border thickness                               |     1px/2px |
| Icon size                                      |   20x20(px) |


![Specifications for input component](images/input_specs.png)




### Helper text

Helper text can be used as additional instructions to the user when filling in the form. It should be visible even on focus state and it can be replaced by an error message until the error is fixed in order to prevent adding more lines of text.

![Text-input helper text example](images/input_helper_text.png)

_Text-input helper text example_

**Usage**

Do:

* Keep helper text as short and specific as possible.
* Only use helper text when truly necessary to avoid overloading the user.
* Should give an example or an explanation of the field

Don’t:

* Helper text should not run longer than the input area.

**Specs**

| Property        | Element        | Token             | Value           |
| --------------- | -------------- | ----------------- | --------------- |
| `margin-top`    | helper-text    | `spacing-02`      | 4px             |
| `font-size`     | helper-text    | `type-scale-01`   | 12px            |
| `font-family`   | helper-text    | `type-sans`       | Open Sans       |
| `color`         | helper-text    | `Hal-Black`       | hsl(0, 0%, 0%)  |

### User Interface Design Considerations

- Input fields should allow users to enter any combination of letters, numbers, or symbols unless otherwise restricted or stipulated by requirements
- Avoid breaking up a number with distinct sections into separate input field (i.e. phone numbers, area codes, SSN, dates, etc) to facilitate screen reader accessibility requirements
- Allow sufficient space in an entry field to allow typical input
- User text areas, rather than a single-line input box for paragraph text and comments
- Input fields are more restrictive for mobile users to make sure the type of input field is warranted
- Only show error validation messages after the user has left the field

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/1cad53d5-9b24-4336-a0c9-3d4b283c9088/variables/

