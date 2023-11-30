

const FaqQuestion = () => {
    return (
        <div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" checked="checked" />
                <div className="collapse-title text-xl font-medium text-orange-600">

                  1.  What is a survey?
                </div>
                <div className="collapse-content">
                    <p>A survey is a method of gathering information using relevant questions from a sample of people with the aim of understanding populations as a whole. Surveys provide a critical source of data and insights for everyone engaged in the information economy, from businesses to media, to government and academics.</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium text-orange-600">
                  2.  Why create surveys using a survey tool?
                </div>
                <div className="collapse-content">
                    <p>It’s easy to create a follow-up or new survey with digital software. Qualtrics offers free survey templates you can download and use immediately. Digital software can save your organization time and money thanks to lower setup and administrative costs</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium text-orange-600">
                   3. How to create a survey?
                </div>
                <div className="collapse-content">
                    <p>A good survey is only as good as its design, so it’s important to be thorough at every stage from your initial idea to final data analysis. By taking the time to plan out your research question and distribution model, you’ll be in the best position to get quality data.</p>
                </div>
            </div>
        </div>
    );
};

export default FaqQuestion;