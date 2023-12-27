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


// Description of Mimosa adenotricha
const Mimosa_adenotricha = new Mimosa()
Mimosa_adenotricha.specificEpithet = 'adenotricha'

Mimosa_adenotricha.stems = new Stems()

Mimosa_adenotricha.stipule = new Stipule()
Mimosa_adenotricha.stipule.margin = new MarginStipule()
Mimosa_adenotricha.stipule.adaxial = new AdaxialStipule()
Mimosa_adenotricha.stipule.abaxial = new AbaxialStipule()

Mimosa_adenotricha.leaf = new Leaf()
Mimosa_adenotricha.leaf.petiole = new Petiole()
Mimosa_adenotricha.leaf.bipinnate = new Bipinnate()
Mimosa_adenotricha.leaf.bipinnate.rachis = new Rachis()
Mimosa_adenotricha.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_adenotricha.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_adenotricha.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(6)
Mimosa_adenotricha.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(8, 13)
Mimosa_adenotricha.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(16)
Mimosa_adenotricha.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_adenotricha.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_adenotricha.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_adenotricha.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(16, 25)
Mimosa_adenotricha.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_adenotricha.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_adenotricha.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_adenotricha.inflorescence = new Inflorescence()
Mimosa_adenotricha.inflorescence.peduncle = new Peduncle()
Mimosa_adenotricha.inflorescence.capitate = new CapitateInflorescence()

Mimosa_adenotricha.flower = new Flower()
Mimosa_adenotricha.flower.bracteole = new Bracteole()
Mimosa_adenotricha.flower.merism = '4-merous'
Mimosa_adenotricha.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_adenotricha.flower.calyx = new Calyx()
Mimosa_adenotricha.flower.corolla = new Corolla()

Mimosa_adenotricha.androecium = new Androecium()
Mimosa_adenotricha.androecium.filaments = new Filaments()
Mimosa_adenotricha.androecium.filaments.colour = 'pinkish'

Mimosa_adenotricha.ginoecium = new Ginoecium()
Mimosa_adenotricha.ginoecium.ovary = new Ovary()

Mimosa_adenotricha.fruit = new Fruit()
Mimosa_adenotricha.fruit.stipe = new Stipe()
Mimosa_adenotricha.fruit.replum = new Replum()
Mimosa_adenotricha.fruit.epicarp = new Epicarp()

Mimosa_adenotricha.seed = new Seed()


// Description authorship
Mimosa_adenotricha.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_adenotricha.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa adenotricha
export { Mimosa_adenotricha }