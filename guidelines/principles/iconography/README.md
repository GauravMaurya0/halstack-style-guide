# Icons

Icons are symbols used for representation and identification of apps or services at a glance. Icons are most effective when they improve visual interest and grab the user's attention. They guide users while they're navigating a page.

## What are Icons used for?

Icons convey immediate meaning and provide shortcuts. Reading text requires more energy than deciphering an icon. Icons can be used to allow for scanning and increase readability.

## When to use icons?

Icons and imagery are noticed before anything else, because we can eye-scan over them faster than text.

You Should use icons When Text Labels Are Overkill. Naturally, you should use an icon when you don’t have enough space for a text label, but this isn’t always the best reason to use an icon. First you should consider creating space in other ways; this might include simplifying the layout or removing unnecessary distractions

## When Not to use icons?

You Shouldn’t use icons Simply Because, By using icons unnecessarily you’re creating more visual distractions, and too many visual distractions make it harder for the user to scan through content for useful information.

You Shouldn't use icons when the Design is crowded, However images rarely give us the information we need.

Using too many icons will become nothing more than decoration.


### Do’s

* Use icons with meaning text labels
* Use a single icon for clarity
* Use single icon per concept
* Use simple continuous line icons
* Use monochrome line icons

### Dont’s

* Icons without labels can be unclear
* Too many icons in UI create visual clutter
* Multiple icon variations should not for the same concept
* Avoid multiple/ complex icon elements with cuts inbetween
* Avoid multicolor line icons

## States

The icons can have two different states based on user interaction.
Default state with only outline and Selected state with the filled reverse of it.

![icon states image] (states.png)

_Examples of icons with its states_


## Formatting

### Anatomy

![icon anatomy image] (anatomy.png)

1. Outline icon
2. Solid/ Revesed icon (Optional)

### Grid

![icon grid template image] (icongrid.png)

_Icon grid template placement_


### Variations

#### SVG icon 

The primary purpose of SVG icons is to define vector-based graphics in XML format. However, for icon browsers consider them as text, so the icons are anti-aliased. With inline SVGs, they are vectors with no anti-aliasing issues even at small sizes, and they look crisper on retina displays.

#### PNG icon

A PNG file is an image saved in the Portable Network Graphic (PNG) format, commonly used to store web graphics, digital photographs, and images with transparent backgrounds. It is a raster graphic similar to a . JPG image but is compressed with lossless compression and supports transparency. The advantages of the PNG format include: Lossless compression -- doesn't lose detail and quality after image compression. Supports a large number of colors -- the format is suitable for different types of digital images, including photographs and graphics.

Raster formats like PNG become pixilated when resized. SVG graphics are resolution-independent. Other image formats may require extra assets/data to fix resolution-based issues, depending on the device. For example, in retina screens, a @2x hack is required to display higher-resolution images.

### Perspective

Icons should be of 2D


### Roundness

Description here


### Size

Description here

#### 16px (small)

Small icons are best used when space is limited. We use small icons in our components such as a chevron-down in the select component or a cross-circle-filled in populated text fields.

#### 24px (medium)

Medium icons are used in the majority of our interface. These are our standard size.

#### 32px (large)

Large icons are used sparingly to emphasize a concept or when space is plentiful. Wherever it’s used, consider the fidelity of the icon in the space it’s being used.

![icon sizes image] (iconsizes.png)

_Examples of sizes of Icon_


### Suggested icon libraries

#### Material design

#### Font Awesome

The library includes a collection of more than 1,500 icons you can use for free. It supports popular web development frameworks such as React, Angular, and Vue as well popular design tools such as Sketch and Adobe apps.

#### What happens when an Icon I need is not provided by the suggested libraries?

Go to flat icons and find a incon that follow the guidelines we list below.


### Placement and alignment

#### Placement

Icons can be placed along with a currosponding meaningful lable inside of a container such as a menu item.

![icon placement image] (placement.png)

_Examples of icon placement_


#### Alignment

By default the icons are placed before the lable on the left side of the label or in the left side of the button lable with always vertically center aligned to its container.

![icon alignment image] (alignment.png)

_Examples of Icon alignment_


### Behavior and interaction

#### Icon group

Icons can be horizontally stacked without its labels in a group and different hierarchy levels are allowed.

![icon group image] (icongroup.png)

_Examples of Icons within a group without its respective labels_


## Design specifications

![Component design specifications] (images/accordion_specs.png)

_Component design specifications_


### Color

| Component token          | Element                      | Core token                 | Value (HEX)  |
| -------------------------| ---------------------------- | -------------------------- | ------------ |
| `titleLabelFontColor`    | Label                        | `color-black`              | #000000      |
| `disabledColor`          | Label:disabled               | `color-grey-400`           | #bfbfbf      |
| `iconColor`              | Custom icon                  | `color-purple-700`         | #5f249f      |
| `hoverBackgroundColor`   | Header background:hover      | `color-purple-100`         | #f2eafa      |
| `backgroundColor`        | Container background         | `color-white`              | #ffffff      |
| `focusBorderColor`       | Header outline:focus         | `color-purple-700`         | #5f249f      |

### Icon Stroke

| Component token          | Element                      | Core token                 | Value   |
| -------------------------| ---------------------------- | -------------------------- | --------|
| `iconBorderStyle`        | stroke                       | `border-style-solid`       | solid   |
| `iconBorderThickness`    | stroke                       | `border-width-1`           | 2px     |

### Typography

| Component token          | Element     | Core token              | Value                     |
| :------------------------| :-----------| :---------------------- | :------------------------ |
| `titleLabelFontFamily`   | Label       | `font-family-sans`      | 'Open Sans', sans-serif;  |
| `titleLabelFontSize`     | Label       | `font-scale-03`         | 16px                      |
| `titleLabelFontWeight`   | Label       | `font-regular`          | 400                       |
| `titleLabelFontStyle`    | Label       | `font-normal`           | normal                    |

### Iconography

| Component token          | Element          | Core token   | Value   |
| -------------------------| -----------------| -------------| --------|
| `iconSize`               | Custom icon      | -            | 24x24px |

### Border

| Component token          | Element             | Core token             | Value         |
| -------------------------| --------------------| ---------------------- | --------------|
| `focusBorderStyle`       | Header:focus border | `border-style-solid`   | solid         |
| `focusBorderThickness`   | Header:focus border | `border-width-1`       | 1px           |
| `borderRadius`           | Accordion container | `border-radius-medium` | 0.25rem / 4px |

### Size

| Property                 | Element        | Core token   | Value        |
| -------------------------| ---------------| -------------| ------------ |
| `min-width`              | Custom icon    | -            | 24px         |
| `min-height`             | Custom icon    | -            | 24px         |

### Spacing

| Property                 | Element        | Core token    | Value        |
| -------------------------| ---------------| --------------| ------------ |
| `padding`                | Custom icon    | -		        | 4px          |
| `margin-right`           | Custom icon    | `spacing-04`  | 12px         |


## Accessibility

### WCAG 2.2

* Understanding WCAG 2.2 - [SC 2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
* Understanding WCAG 2.2 - [SC 4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

### WAI-ARIA 1.2

* 
* 


## Related links

* [React component](https://developer.dxc.com/tools/react/next/#/icons)
* [Angular component](https://developer.dxc.com/tools/angular/next/#/icons)
* [Adobe XD component](https://xd.adobe.com/view/?/)

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/accordion/README.md)
