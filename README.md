<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="img/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Useful Code Examples</h3>

  <p align="center">
    An awesome React JS code examples for your projects!
    <br />
    <br />
    <br />
    </div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Quick Menu</summary>
  <ol>
    <li>
      <a href="#hooks">Hooks</a>
      <ul>
        <li><a href="#usefetch">useFetch hook</a></li>
      </ul>
    </li>
    <li>
      <a href="#utils">Utils</a>
      <ul>
        <li><a href="#strapiFormatter">Strapi Response Formatter</a></li>
      </ul>
    </li>
  </ol>
</details>

# Hooks
usefetch safdadsdfdsfsafsddsfasdfa
------
## useFetch Hook: ( URL: string ) ⇒ Response <code>JSON</code>



| Param | Type                      | Default | Description   |
|-------|---------------------------|---------|---------------|
| loading  | <code>Bool</code>         | true    | Loading state |
| error  | <code>Error Object</code> |     | Error handle  |
| data  | <code>JSON</code>         |         | Response JSON |

### Example
   ```js
    import useFetch from './hooks/useFetch'
    const { loading, error, data } = useFetch('http://localhost/requestURL')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    console.log(data)
   ```

<p align="right">
<span align="left"><a href="https://github.com/LeadMonster/Library/blob/main/hooks/useFetch.js">Go to source</a></span>
(<a href="#readme-top">back to top</a>)
</p>

# Utils
## Strapi Response Formatter: ( Data: JSON ) ⇒ Schema Formatted <code>JSON</code>
### Methods

| Method       | Params                            | Description                                                                                                                                                   |
|--------------|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| schema       |                                   | Return schema.json   <span align="left"><a href="https://github.com/LeadMonster/Library/blob/main/utils/strapiFormatter/schema.json/">View example</a></span> |
| fromSchema() | <code>Response Data (JSON)</code> | Format Strapi JSON response from schema template                                                                                                              |
| schemaURL()  | <code>UID (String)</code>         | Transform UID to fetch URL from schema.json                                                                                                                   |

### Usage


   ```js
import {strapiFormatter} from "./strapiFormatter";

const useFetch = (url, formatter) => {
    if (formatter !== undefined){ url = strapiFormatter.schemaURL(url) }
    ...
    const res = await fetch(url)
    let json = await res.json()
    if (formatter !== undefined){
        let formatted = await strapiFormatter.fromSchema(json)
    }
    ...
}
   ```
<p align="right">
<span align="left"><a href="https://github.com/LeadMonster/Library/blob/main/utils/strapiFormatter">Go to source</a></span>
(<a href="#readme-top">back to top</a>)
</p>