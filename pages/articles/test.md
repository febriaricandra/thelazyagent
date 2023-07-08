---
title: Test
description: This is a test
cover: /test/zyro-image.png
---

### Installation

To install markdoc in Next.js, run the following command:

```bash
npm install @markdoc/next.js @markdoc/markdoc
```

reactjs example

```jsx
import React from "react";
import { Markdoc } from "@markdoc/next.js";
import { MarkdocProvider } from "@markdoc/markdoc";

export default function Home() {
  return (
    <MarkdocProvider>
      <Markdoc
        source={`
          # Hello World
          This is a paragraph
        `}
      />
    </MarkdocProvider>
  );
}
```
