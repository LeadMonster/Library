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
      <a href="#about-the-project">Hooks</a>
      <ul>
        <li><a href="#useFetch-hook">useFetch hook</a></li>
      </ul>
    </li>
  </ol>
</details>

# Hooks
## useFetch Hook: ( URL: string ) ⇒ Response <code>JSON</code>
<a href="https://github.com/LeadMonster/Library/blob/main/hooks/useFetch.js">Go to source</a>



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

<p align="right">(<a href="#readme-top">back to top</a>)</p>