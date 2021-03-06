import { useTheme } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Animated } from 'react-native'
import { Block } from '../components'
import layout from '../constants/styles/layout'
import { MissingWordQuestion } from './missingWord/question'
import {
  QUESTION_ANIMATION_TIME,
  QUESTION_HEIGHT,
  QUESTION_INITIAL_BOTTOM,
} from './style'
import { getDatabase, ref, onValue } from 'firebase/database'
import { shuffle } from '../utils/array'
import { GameResultScreen } from './gameResult/GameResultScreen'
import * as reduxActions from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export function GameScreen({}) {
  // theme
  const { colors } = useTheme() as AppTheme

  // redux
  const dispatch = useDispatch()
  const {
    firebase: { examples },
  } = useSelector((state) => state) as AppRootState

  // state
  const [bottom] = useState(new Animated.Value(QUESTION_INITIAL_BOTTOM))

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const db = getDatabase()
    const reference = ref(db)
    onValue(reference, (snapshot) => {
      const data = snapshot.val()
      dispatch(reduxActions.firebase.changeReducer(data))
    })
  }, [])

  useEffect(() => {
    if (examples && examples.length) {
      Animated.timing(bottom, {
        toValue: 0,
        duration: QUESTION_ANIMATION_TIME,
        useNativeDriver: false,
      }).start(() => {
        if (index === 0) {
          dispatch(reduxActions.gameResult.changeReducer({ results: [] }))
        }
      })
    }
  }, [examples, index])

  const getAnswers = () => {
    const len = examples.length
    if (len)
      return shuffle([
        examples[index].wordDe,
        examples[(index + 1) % len].wordDe,
        examples[(index + 2) % len].wordDe,
        examples[(index + 3) % len].wordDe,
      ])
    return []
  }

  const onPressNext = () => {
    // save results
    Animated.timing(bottom, {
      toValue: QUESTION_INITIAL_BOTTOM,
      duration: QUESTION_ANIMATION_TIME,
      useNativeDriver: false,
    }).start(() => {
      setIndex(index + 1)
    })
  }

  const onPressPlayAgain = () => {
    Animated.timing(bottom, {
      toValue: QUESTION_INITIAL_BOTTOM,
      duration: QUESTION_ANIMATION_TIME,
      useNativeDriver: false,
    }).start(() => {
      setIndex(0)
    })
  }

  return (
    <Block flex color={colors.background}>
      <Animated.View
        style={{
          position: 'absolute',
          bottom,
          height: QUESTION_HEIGHT,
          width: layout.window.width,
        }}>
        {examples && examples.length > index ? (
          examples.length ? (
            <MissingWordQuestion
              key={`missingWord-${index}`}
              answers={getAnswers()}
              example={examples[index]}
              onPressNextQuestion={onPressNext}
            />
          ) : null
        ) : (
          <GameResultScreen onPressPlayAgain={onPressPlayAgain} />
        )}
      </Animated.View>
    </Block>
  )
}
