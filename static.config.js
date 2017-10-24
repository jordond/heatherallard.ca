/* eslint-disable react/no-danger */
import React, { Component } from "react";
import { renderStatic } from "glamor/server";
//
import withCssLoader from "react-static/lib/plugins/withCssLoader";
import withFileLoader from "react-static/lib/plugins/withFileLoader";

export default {
  getRoutes: async () => [
    {
      path: "/",
      component: "src/containers/Home"
    },
    {
      is404: true,
      component: "src/containers/404"
    }
  ],
  postRenderMeta: async html => ({
    glamorousData: renderStatic(() => html)
  }),
  Html: class CustomHtml extends Component {
    render() {
      const {
        Html,
        Head,
        Body,
        children,
        staticMeta: { glamorousData: { css } = {} } = {}
      } = this.props;

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <style dangerouslySetInnerHTML={{ __html: css }} />
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  },
  webpack: [withFileLoader, withCssLoader]
};
