import React from "react";

const Right_Accordian = () => {
  return (
    <>
      <div className="px-2 my-4">
        <div>
          <h1 className="text-[#1F1F1F]  font-Robot font-bold text-xl">
            Right of withdrawal
          </h1>
        </div>
        <div className=" font-Mont font-medium text-sm my-4">
          <p>
            You have the right to withdraw from this contract within fourteen
            days without giving any reason
          </p>
          <p className="my-3">
            The cancellation period is fourteen days from the day the contract
            is concluded
          </p>
          <p>
            In order to exercise your right of withdrawal, you must inform us
            (fax: +49 30 308324531, email: service@ebay-kleinangebote.de) about
            your decision by means of a clear declaration (e.g. a letter sent by
            post, fax or email) to revoke this contract. You can use the
            attached model withdrawal form for this purpose, but this is not
            mandatory.
          </p>
          <p className="my-3">
            In order to meet the cancellation deadline, it is sufficient for you
            to send your notification that you are exercising your right of
            cancellation before the cancellation period has expired.
          </p>
        </div>
        {/* ---------------------------------------------------------------------------------------------------------- */}
        <div>
          <h1 className="text-[#1F1F1F]  font-Robot font-bold text-xl">
            Consequences of cancellation
          </h1>
        </div>
        <div className=" font-Mont font-medium text-sm my-4">
          <p>
            If you withdraw from this contract, we will have given you all
            payments that we have received from you, including delivery costs
            (with the exception of the additional costs that result from
            choosing a different type of delivery than the cheapest standard
            delivery offered by us have), to be repaid immediately and at the
            latest within fourteen days from the day on which we received
            notification of your cancellation of this contract. For this
            repayment, we will use the same means of payment that you used for
            the original transaction, unless something else was expressly agreed
            with you; In no case will you be charged any fees for this
            repayment.
          </p>
          <p className="my-3">
            If you have requested that the services should begin during the
            cancellation period, you have to pay us a reasonable amount, which
            corresponds to the proportion of the services already provided up to
            the point in time at which you informed us of the exercise of the
            right of cancellation with regard to this contract Compared to the
            total scope of the services provided for in the contract.
          </p>
        </div>
        {/* ----------------------------------------------------------------------------------------------- */}

        <div>
          <h1 className="text-[#1F1F1F]  font-Robot font-bold text-xl">
            special instructions
          </h1>
        </div>
        <div className=" font-Mont font-medium text-sm my-4">
          <p>
            Your right of revocation expires prematurely if we have fully
            provided the service owed and have only started to perform the
            service after you have given your express consent and at the same
            time confirmed your knowledge that you will lose your right of
            revocation if we have fully fulfilled the contract.
          </p>
        </div>

        {/* ------------------------------------------------------------------------------------------------ */}
        <div>
        <div>
          <h1 className="text-[#1F1F1F]  font-Robot font-bold text-xl">
          Model withdrawal form
          </h1>
        </div>
            {instruction.map((item,index)=>(
                <>
                <div className="even:my-6 last:text-[#F30000] font-Mont font-medium text-black text-base">
                    <p>
                        {item.name}
                    </p>
                </div>
                </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Right_Accordian;
const instruction =[ 
    {
        name:'(If you want to cancel the contract, please fill out this form and send it back.)'
    },
    {
        name:'= To eBay Classifieds GmbH, Albert-Einstein-Ring 26, 14532 Kleinmachnow, Fax: +49 30 308324531, E-Mail: service@ebay-kleinangebote.de:'
    },
    {
        name:'= I / we () hereby revoke the contract concluded by me / us () for the purchase of the following goods () / the provision of the following service () '
    },
    {
        name:'= Ordered on () / received on ()'
    },
    {
        name:'= Name of the consumer (s)'
    },
    {
        name:'= Address of the consumer (s)'
    },
    {
        name:'= Signature of the consumer (s) (only if this is communicated on paper)'
    },
    {
        name:'= date'
    },
    {
        name:'(*) Delete where inapplicable.'
    },
]















