import { atom } from 'jotai';
import { useImmerAtom } from 'jotai-immer';

const dataStruct = {
  aL1: [
    { aL2I: 1, aL2Obj: { aL3: 11 }, aL2Arr: ['1', '11'] },
    { aL2I: 2, aL2Obj: { aL3: 22 }, aL2Arr: ['2', '22'] },
    { aL2I: 3, aL2Obj: { aL3: 33 }, aL2Arr: ['3', '33'] },
  ],
  bL1: [
    { bL2I: 4, bL2Obj: { bL3: 44 }, bL2Arr: ['4', '44'] },
    { bL2I: 5, bL2Obj: { bL3: 55 }, bL2Arr: ['5', '55'] },
    { bL2I: 6, bL2Obj: { bL3: 66 }, bL2Arr: ['6', '66'] },
  ],
};

// data atom
const normalAtom = atom(dataStruct);

const ImmerComponent = () => {
  // All three below enjoys the new write function
  const [normal, setNormalAtom] = useImmerAtom(normalAtom);

  const onClick = () => {
    setNormalAtom((p) => {
      p.aL1[0].aL2Obj.aL3 = 999; // Directly set the inner value

      /* a part of data object
          data{ aL1: [ { aL2I: 1, aL2Obj: { aL3: 11 }, ... }, ... ], ... }
                                            ^^^^^^^
      */
    });
  };

  return (
    <div>
      <h3>Original Value:</h3>
      <h5>{normal.aL1[0].aL2Obj.aL3}</h5>
      <button onClick={onClick}>Mutate Value</button>

      <h3>New Value:</h3>
      <h5>{normal.aL1[0].aL2Obj.aL3}</h5>
    </div>
  );
};

export default ImmerComponent;
