## Overview

Text inputs are the standard way to receive the user input into an application. There are several types of inputs to cover a spectrum, from email inputs to numbers. 
Each input should specify which property the user is editing and indicate clearly the status of the field in every interaction.

## Appearance

The input appearance must be simple and clear, in this design system text inputs are represented as a placeholder with a thin underline where the text will be written. 
Other elements like assistive text, prefix or suffix icons or error handlers can be complementing the input field making the basic structure more informative.

### Modes

Five different modes can be identify using text input component: __basic__, __basic with assistive text__, __basic with prefix__, __basic with suffix__ and __basic with prefix and suffix__.

![Input modes example](images/input_modes.png)

### States

The states for text input are: __normal__, __focused__, __selected__, __value entered__ and __disabled__.

![Input states example](images/input_states.png)

## Theming and tokens

| Tokens        | Themable      | Default value |
| ------------- |:-------------:| -------------:|
| textColor     | `false` | `black` |
| labelColor    | `false`     | `black`  |
| placeholderColor | `false`     | `#EEEEEE`  |
| underlinedColor | `false`     | `black`  |
| assistiveTextColor | `false`     | `black`  |
| disabled | `false`     | `0.34 opacity`  |
| error | `false`     | `#D0011B`  |

## Text Area

The text area is a variation inside the text input component. The functionality of both components is the same, the user can enter text in the input area that later will be processed by the application. However, the text area is made to match with a large data text, like a description, paragraph, a long address or a comment. 
When the amount of information given by the user needs to be precise and detailed, the application should use this element for that purpose.

It allows multiple lines, adapting the text to the space available and in the case that there won't be enough space then the text will be overlapped and a scrollbar will be used to scroll up and down to see the rest of the information. Also, the content area is resizable (based on the frame that is contained) so the user has the chance to increase/decrease the total area.

The text area can have the following features: Label, assistive text, min and max-width, resizable call to action and scrollbar.

The aspects that text area is not including respecting text input are:
- Prefix and suffix
- Max height fixed

![Textarea example](images/input_textarea.png)

## Design Specifications

| Property           | Value|
|--------------------|------:|
| Margin             | `15px`|
| Height (min)       | `34px`|
| Height (max)       | `74px`|
| Widht (min)        | `230px` |
| Widht (max)        | `100%` |
| Border thickness   | `1px/2px` |
| Font size (with text) | `16px` |
| Font size smaller text | `12px` |
| Font weight        | `Regular` |
| Icon size       | `18x18(px)` |
| Distance between text and underline | `12px` |
| Icon margin right side | `6px` |
| Distance between text and underline (animated) | `6px` |
| Assistive text margin top | `6px` |

![Specifications for input component](images/input_specs.png)

### Required fields

Required fields are a variation in the normal behavior of the input fields. This indicates to the user that the input is required so it can't be skipped if the intention is to go forward in the application.

A red asterisks before the input label must indicate that the text input is a required field, with this visual clue the application is telling the user the mandatory field.

Here are the different representations of a required field:

![Type required in input texts](images/input_required.png)

The specifications for the required input follows the same guide that a normal input, with the variation of the asterisk before the label.


### User Interface Design Considerations

- Input fields should allow users to enter any combination of letters, numbers, or symbols unless otherwise restricted or stipulated by requirements
- Avoid breaking up a number with distinct sections into separate input field (i.e. phone numbers, area codes, SSN, dates, etc) to facilitate screen reader accessibility requirements
- Allow sufficient space in an entry field to allow typical input
- User text areas, rather than a single-line input box for paragraph text and comments
- Input fields are more restrictive for mobile users to make sure the type of input field is warranted
- Only show error validation messages after the user has left the field

## Links and references

- https://xd.adobe.com/view/afb409f4-884d-4236-6cf2-4766bee75b52-d985/screen/1cad53d5-9b24-4336-a0c9-3d4b283c9088/