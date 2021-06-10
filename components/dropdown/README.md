## Overview

The use of dropdowns has its advantages but it depends on the screen support. Dropdowns are a standard widget, so the users know how to interact with them. The options available in a dropdown component are static, so this prevents from erroneous data entered by the user since it only shows a range of correct values for that input.

A dropdown in mobile is more unusable than a dropdown in a web application, regarding screen spacing, size of elements and scannability in the number of options to display.

## Appearance

Dropdowns have a similar look and behaviour to select components, the difference is that while select is only to collect user's data into a form, dropdown can be used in a variety of scenarios.

From header menus to executing different actions, dropdowns can be useful as a list of items that will be shown when the user clicks or hovers their main parent that will trigger the pop up with the options.

As it is widely used, an arrow linked with the label of the dropdown should be shown to indicate the user that more options are available but are currently hidden.

By default, every dropdown will be extending underneath his main container if the space in the screen is enough to contain all the size declared for the pop-up.

If the dropdown has options with submenus, this will be indicated with an arrow too, but in this case, the submenu appears by the right side, so the direction of the arrow should be placed in correspondence.

Once an option is selected by the user, the main container has to reflect the option chosen and the dropdown has to be closed after the user's click.

If there is a special case when the dropdown couldn't be displayed below the selector because it is hiding important information reducing discoverability and scanability in the website then consider to use other options to display the information or customize the position of the pop up to fitting the necessities of the application.

### Modes

There is a **default** mode for the dropdown component.

![Dropdown modes](images/dropdown_modes.png)

### States

Six different states for the dropdown elememts: **default**, **dropdown displayed**, **option hovered**, **option selected**, **submenu displayed** and **option selected (no dropdown)**.

![Dropdown modes](images/dropdown_states.png)

### Color
### Primary button
| Tokens	                       | Value   |
-------------------------------  | --------|
| selectedOptionBackgroundColo	 | #D9D9D9 |
| primaryHoverBackgroundColor	   | #000000 |
| hoveredOptionBackgroundColor	 | #F2F2F2 |
| disabledColor	                 | #BFBFBF |
| focusColor	                   | #0C5BA7 |

### Text button
|Tokens |	Value |
|------ | ------|
|textBackgroundColor	|transparent |
|textFontColor|	#6F2C91 |
|textHoverBackgroundColor	| #000000 |
|textHoverFontColor |	#FFFFFF |
|textActiveBackgroundColor| #676767 |
|disabledTextFontColor| #CEB7D9 |
|focusColor	| #005FCC |

### Size
The component width can adopt the following values:

|width	| value |
--------|-------|
|small	| 60px |
|medium	| 240px |
|large	| 480px |
|fillParent	|- |
|fitContent	|- |

The component height is fixed:
height	value
min-height	40px

### Margin
Button margin can use the values:

|margin	 | value |
|--------|-------|
|xxsmall	| 6px |
| xsmall	| 16px |
|small |	24px |
| medium	| 36px |
| large |	48px |
| xlarge	| 64px |
| xxlarge	| 100px |

These values can be applied independently to each side of the component: top bottom left right

### Padding
| Property	| Value |
|-----------| ------|
|padding-right	| 15px |
| padding-left  | 20px |

### Border
| Property	| Value |
|-----------|-------|
|border-radius	| 4px |
|border-width	| 1px |
|border-width focus outline	 | 2px |

### Typography
| Property	| Value |
|-----------|-------|
|font-size	| 1rem/16px |
| font-weight	| 400 |
| line-height	| 1.5em |

### Properties
|Property	| Value |
|---------|-------|
|List item padding-left	 | 16px |
|height	 | 36px |
|font-size	| 16px |
|font-weight	| Regular |
|Icon size	| 20 x 20px |
|Spacing between icon and label	 | 16px |


![Dropdown specifications](images/dropdown_specs.png)

## Icon Usage

It is allowed the use of icons within the dropdown component. There are several options of configuration, the icon can be placed before or after the label, also the icon can be the unique content of the dropdown placeholder and options, so the final goal of this is to keep consistency with the rest of the components of the design system such as buttons or selects, that have the same behavior.

![Icon usage](images/dropdown_icon_usage.png)

## User Interface Design Considerations

- Consider the number of options (binary decisions or a few items) to decide to implement one component that represent in a better way the data, i.e. radio button or switch toggle.
- For a large number of well specified options, consider to use an autocomplete field to filter the amount of options while typing.
- Consider the input, might be that a text input would fit better than a dropdown.

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/7ea088c7-538c-400f-ac77-722eabc1ecf2/variables/

