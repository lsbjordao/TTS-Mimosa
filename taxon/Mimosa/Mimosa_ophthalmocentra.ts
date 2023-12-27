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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa ophthalmocentra
const Mimosa_ophthalmocentra = new Mimosa()
Mimosa_ophthalmocentra.specificEpithet = 'ophthalmocentra'

Mimosa_ophthalmocentra.stems = new Stems()

Mimosa_ophthalmocentra.stipule = new Stipule()
Mimosa_ophthalmocentra.stipule.margin = new MarginStipule()
Mimosa_ophthalmocentra.stipule.adaxial = new AdaxialStipule()
Mimosa_ophthalmocentra.stipule.abaxial = new AbaxialStipule()

Mimosa_ophthalmocentra.leaf = new Leaf()
Mimosa_ophthalmocentra.leaf.petiole = new Petiole()
Mimosa_ophthalmocentra.leaf.bipinnate = new Bipinnate()
Mimosa_ophthalmocentra.leaf.bipinnate.rachis = new Rachis()
Mimosa_ophthalmocentra.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ophthalmocentra.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ophthalmocentra.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 6)
Mimosa_ophthalmocentra.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ophthalmocentra.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ophthalmocentra.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ophthalmocentra.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(18, 21)
Mimosa_ophthalmocentra.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ophthalmocentra.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ophthalmocentra.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ophthalmocentra.inflorescence = new Inflorescence()
Mimosa_ophthalmocentra.inflorescence.peduncle = new Peduncle()
Mimosa_ophthalmocentra.inflorescence.spicate = new Spicate()

Mimosa_ophthalmocentra.flower = new Flower()
Mimosa_ophthalmocentra.flower.bracteole = new Bracteole()
Mimosa_ophthalmocentra.flower.merism = '4-merous'
Mimosa_ophthalmocentra.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_ophthalmocentra.flower.calyx = new Calyx()
Mimosa_ophthalmocentra.flower.corolla = new Corolla()
Mimosa_ophthalmocentra.flower.corolla.shape = 'campanulate'

Mimosa_ophthalmocentra.androecium = new Androecium()
Mimosa_ophthalmocentra.androecium.filaments = new Filaments()
Mimosa_ophthalmocentra.androecium.filaments.colour = ['whitenish', 'creamish']

Mimosa_ophthalmocentra.ginoecium = new Ginoecium()
Mimosa_ophthalmocentra.ginoecium.ovary = new Ovary()

Mimosa_ophthalmocentra.fruit = new Fruit()
Mimosa_ophthalmocentra.fruit.stipe = new Stipe()
Mimosa_ophthalmocentra.fruit.replum = new Replum()
Mimosa_ophthalmocentra.fruit.epicarp = new Epicarp()

Mimosa_ophthalmocentra.seed = new Seed()


// Description authorship
Mimosa_ophthalmocentra.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ophthalmocentra.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa ophthalmocentra
export { Mimosa_ophthalmocentra }