useEffect(() => {
    if (categoryEl.current) {
      setLoading(true);
      axios.get("https://opentdb.com/api.php?amount=1", {
        params: {
          category: categoryEl.current.value
        }
      })
      .then(res => {
        setFlashcards(res.data.results.map((questionItem, index) => {
          return {
            id: `${index}-${Date.now()}`,
            pergunta: decodeString(questionItem.question),
            resposta: decodeString(questionItem.correct_answer)
          }
        }))
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
    }
  }, [categoryEl.current]);