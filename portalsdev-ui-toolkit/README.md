# PortalsDev UI Toolkit

A suite of React components that we can leverage inside of our SPFx projects.

## Urls

- [Spark Demo](https://skylinespark.sharepoint.com/sites/DevShowcase/SitePages/DesignSystem.aspx)

## Using it to develop in another project

### Linking Strategy

What if we want to use the UI Toolkit in another project but don't want to publish the Toolkit as a publicly available NPM package?

#### 1) Register the Toolkit Project as Linkable

Navigate to the `/portalsdev-ui-toolkit` project folder on your file system, and run:

```cmd
npm link
```

> We can leverage `npm` linking to "trick" our project (the project that wants to use the toolkit) into thinking that we have a published NPM package, but really it is a project on our local file system. This tells `npm` it is a project that other projects could choose to include.

#### 2) Link the UI Toolkit from inside your project

Navigate to the project in which you want to consume the UI Toolkit and run

```cmd
npm link portalsdev-ui-toolkit
```

#### 3) Import a UI Toolkit component in your project

Now that it is linked, we can treat `portalsdev-ui-toolkit` as if it were a real published NPM package.

For example, you'd could import the `Card` component as follows:

```cmd
import Card from "portalsdev-ui-toolkit/lib/components/Card/Card";
```

> Everything will be referenced starting with `portalsdev-ui-toolkit/lib/`

#### 4) Make updates to the UI Toolkit as you work on your project

As you try to leverage the UI Toolkit in your project you MIGHT encounter situations where you need to update a Toolkit component, fix a bug, or even add a new UI Toolkit component.

From the UI Toolkit project folder run:

```cmd
tsc -w
```

> When you make changes in the UI Toolkit project, you need to compile the Typescript so the new code makes it into the `/lib` folder.
