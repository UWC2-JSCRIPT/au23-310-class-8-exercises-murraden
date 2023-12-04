describe('tests for the dealerShouldDraw function', () => {
    it('should return a boolean true if the dealers hand is < 17 or dealers hand is === 17 && is soft', () => {
      const hand = [
          {displayVal: 'Nine', val: 9, suit: 'hearts'},
          {displayVal: 'Ten', val: 10, suit: 'hearts'}
      ]
  
      const result = dealerShouldDraw(hand)
  
      expect(result).toBe(false)
      
    })
  })

  describe('tests for the dealerShouldDraw function', () => {
    it('should return a boolean true if the dealers hand is < 17 or dealers hand is === 17 && is soft', () => {
      const hand = [
          {displayVal: 'Ace', val: 11, suit: 'hearts'},
          {displayVal: 'Six', val: 6, suit: 'hearts'}
      ]
  
      const result = dealerShouldDraw(hand)
  
      expect(result).toBe(true)
      
    })
  })

  describe('tests for the dealerShouldDraw function', () => {
    it('should return a boolean true if the dealers hand is < 17 or dealers hand is === 17 && is soft', () => {
      const hand = [
          {displayVal: 'Ace', val: 11, suit: 'hearts'},
          {displayVal: 'Six', val: 6, suit: 'hearts'},
          {displayVal: 'Ten', val: 10, suit: 'hearts'}
      ]
  
      const result = dealerShouldDraw(hand)
  
      expect(result).toBe(false)
      
    })
  })

  describe('tests for the dealerShouldDraw function', () => {
    it('should return a boolean true if the dealers hand is < 17 or dealers hand is === 17 && is soft', () => {
      const hand = [
          {displayVal: 'Two', val: 2, suit: 'hearts'},
          {displayVal: 'Four', val: 4, suit: 'hearts'},
          {displayVal: 'Two', val: 2, suit: 'clubs'},
          {displayVal: 'Five', val: 5, suit: 'hearts'}
      ]
  
      const result = dealerShouldDraw(hand)
  
      expect(result).toBe(true)
      
    })
  })