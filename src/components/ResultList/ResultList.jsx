import ResultItem from '../ResultItem/ResultItem'

export default function ResultList(props) {
  const { results } = props;

  return (
    <ul>
      {
        results.map((item) =>
          <li key={item.id}>
            <ResultItem item={item} />
          </li>
        )
      }
    </ul>
  )
}
