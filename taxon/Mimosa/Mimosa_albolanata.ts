// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa albolanata
const Mimosa_albolanata = new Mimosa()
Mimosa_albolanata.specificEpithet = 'albolanata'

Mimosa_albolanata.stems = new Stems()

Mimosa_albolanata.stipule = new Stipule()
Mimosa_albolanata.stipule.margin = new MarginStipule()
Mimosa_albolanata.stipule.adaxial = new AdaxialStipule()
Mimosa_albolanata.stipule.abaxial = new AbaxialStipule()

Mimosa_albolanata.leaf = new Leaf()
Mimosa_albolanata.leaf.petiole = new Petiole()
Mimosa_albolanata.leaf.bipinnate = new Bipinnate()
Mimosa_albolanata.leaf.bipinnate.rachis = new Rachis()
Mimosa_albolanata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_albolanata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_albolanata.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(9)
Mimosa_albolanata.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(10, 30)
Mimosa_albolanata.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(32)
Mimosa_albolanata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_albolanata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_albolanata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_albolanata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(18)
Mimosa_albolanata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(22, 44)
Mimosa_albolanata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(55)
Mimosa_albolanata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_albolanata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_albolanata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_albolanata.inflorescence = new Inflorescence()
Mimosa_albolanata.inflorescence.peduncle = new Peduncle()
Mimosa_albolanata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_albolanata.flower = new Flower()
Mimosa_albolanata.flower.bracteole = new Bracteole()
Mimosa_albolanata.flower.merism = '4-merous'
Mimosa_albolanata.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_albolanata.flower.calyx = new Calyx()
Mimosa_albolanata.flower.corolla = new Corolla()

Mimosa_albolanata.androecium = new Androecium()
Mimosa_albolanata.androecium.filaments = new Filaments()
Mimosa_albolanata.androecium.filaments.colour = 'pinkish'

Mimosa_albolanata.ginoecium = new Ginoecium()
Mimosa_albolanata.ginoecium.ovary = new Ovary()

Mimosa_albolanata.fruit = new Fruit()
Mimosa_albolanata.fruit.stipe = new Stipe()
Mimosa_albolanata.fruit.replum = new Replum()
Mimosa_albolanata.fruit.epicarp = new Epicarp()

Mimosa_albolanata.seed = new Seed()


// Description authorship
Mimosa_albolanata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_albolanata.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa albolanata
export { Mimosa_albolanata }