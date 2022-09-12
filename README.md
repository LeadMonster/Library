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
    </div>

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