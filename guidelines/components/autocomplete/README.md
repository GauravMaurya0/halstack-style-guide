# Autocomplete

The autocomplete component, also known as predictive search is an input field that suggests different options to the user based on his input. It is used mainly in e-commerce sites to help with the product search but also it fits in several other scenarios like addresses, countries, or color lists.

## Appereance

As a reference, it took the input text from the design system, so basically, in terms of look and feel and behavior is very similar to that one. Apart from the typing part, it is necessary to show a list of suggestions related to the searched term. To accomplish that we reuse the concept of the select component that uses a dropdown to show information split into different rows.

### Modes

Two modes can be defined for the autocomplete component, based on the result set that is going to be searchable.
If all the result set is on the application side, the synchronous mode is the one used.
On the other hand, if the application needs to interact with the APIs in every action of the user the mode will be asynchronous.

Modes available: **synchronous** and **asynchronous**.

The main difference is the control of the information flow within the component because in the asynchronous case, the component needs to handle different scenarios with the fetching of information or errors.

![Autocomplete modes (synchronous)](images/autocomplete_mode_sync.png)

![Autocomplete modes (asynchronous)](images/autocomplete_mode_async.png)

### States

Starting with the synchronous mode, five different states can be defined.
States: **normal**, **focused** (all the suggestions are shown), **value entered** (the suggestions get filtered by the input), **value selected** and **disabled**.

![Autocomplete states (synchronous)](images/autocomplete_states_sync.png)

If the mode is asynchronous, there are a few states more to indicate communication with the APIs.
States: **searching**, **no results** and **action error**.

![Autocomplete states (asynchronous)](images/autocomplete_states_async.png)

## Design tokens

| Tokens                        | Default value |
| ----------------------------- | ------------: |
| fontColor                     |     `#000000` |
| disabledFontColor             |     `#b1b1b1` |
| placeholderColor              |     `#D9D9D9` |
| error                         |     `#D0011B` |
| selectedOptionBackgroundColor |     `#F2F2F2` |
| hoverOptionColor              |     `#000000` |
| scrollBarThumbColor           |     `#666666` |
| scrollBarTrackColor           |     `#D9D9D9` |

The other attributes of the autocomplete component are inherited from the input component because it is used internally in the date implementation, so a change in any token of the text field component will affect this component too.

## Design Specifications

The specifications of the component are mix with the ones from the input field and the select component. If you are interested in see the details, you can check each component page to get more information.

### User Interface Design Considerations

- Consider using this component when the information to fill is complex or large and you want to assist the user with suggestions to make the process easiest and quicker.
- If the options are a few it would be better to use a select component
- Make sure that the error coming from the API is understandable for the user

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/736b626a-87bb-42f4-8871-64701de74177/variables/
